import { access, readFile, readdir } from 'node:fs/promises';
import { resolve, relative, join } from 'node:path';
import { fileURLToPath } from 'node:url';

async function serverModules(directory) {
  const result = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) result.push(...await serverModules(path));
    else if (entry.name.endsWith('.mjs')) result.push(path);
  }
  return result;
}

export async function verifyCloudflareStyles(outputDirectory) {
  const output = resolve(outputDirectory);
  const publicDirectory = join(output, 'public');
  const references = new Set();
  for (const module of await serverModules(join(output, 'server'))) {
    const source = await readFile(module, 'utf8');
    for (const match of source.matchAll(/["'](\/assets\/[^"']+\.css)["']/g)) references.add(match[1]);
  }
  if (!references.size) throw new Error('The server bundle contains no stylesheet references');
  for (const reference of references) {
    const asset = resolve(publicDirectory, `.${reference}`);
    if (relative(publicDirectory, asset).startsWith('..')) throw new Error('Stylesheet escapes the public output');
    try { await access(asset); }
    catch { throw new Error(`Server stylesheet is missing from public output: ${reference}`); }
  }
  return references.size;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const count = await verifyCloudflareStyles('.output');
    console.log(`Cloudflare artifact check passed: ${count} server stylesheet reference(s) exist`);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
