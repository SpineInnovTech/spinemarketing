import assert from 'node:assert/strict';
import { test } from 'node:test';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { verifyCloudflareStyles } from './check-cloudflare-artifact.mjs';

async function fixture(testContext) {
  const root = await mkdtemp(join(tmpdir(), 'corporate-css-'));
  testContext.after(() => rm(root, { recursive: true, force: true }));
  await mkdir(join(root, 'server/_ssr'), { recursive: true });
  await mkdir(join(root, 'public/assets'), { recursive: true });
  await writeFile(join(root, 'public/assets/styles-current.css'), 'body{}');
  return root;
}

test('accepts a stylesheet present in the same release', async (context) => {
  const root = await fixture(context);
  await writeFile(join(root, 'server/_ssr/router.mjs'), 'const css = "/assets/styles-current.css";');
  assert.equal(await verifyCloudflareStyles(root), 1);
});

test('blocks a server bundle that refers to a stale stylesheet', async (context) => {
  const root = await fixture(context);
  await writeFile(join(root, 'server/_ssr/router.mjs'), 'const css = "/assets/styles-previous.css";');
  await assert.rejects(verifyCloudflareStyles(root), /stylesheet is missing/);
});
