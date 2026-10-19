import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { createHash } from "node:crypto";

const manifest = await readFile("docs/WORKBENCH-SCREENSHOT-PROVENANCE.md", "utf8");
const listed = new Map([...manifest.matchAll(/\]\(\/(images\/workbench\/[^)]+)\).*?\|\s*(\d+)×(\d+)/g)]
  .map(match => [match[1], { width: Number(match[2]), height: Number(match[3]) }]));
const root = "out/images/workbench";
const files = (await readdir(root, { recursive: true })).filter(file => file.endsWith(".webp"));
const primary = files.filter(file => !/-\d+w\.webp$|-og\.webp$/.test(file));
for (const file of primary) {
  const expected = listed.get("images/workbench/" + file);
  assert.ok(expected, `Capture missing from provenance: ${file}`);
  const actual = await sharp(path.join(root, file)).metadata();
  assert.equal(actual.width, expected.width, `Capture width: ${file}`);
  assert.equal(actual.height, expected.height, `Capture height: ${file}`);
}
for (const asset of listed.keys()) assert.ok((await stat("out/" + asset)).isFile(), `Manifest asset missing: ${asset}`);

for (const route of ["product"]) {
  const html = await readFile(`out/${route}.html`, "utf8");
  assert.ok(html.includes("Live Workbench Views"), `Missing Workbench label: ${route}`);
  assert.ok(html.includes("QA fixture"), `Missing factual provenance: ${route}`);
  assert.ok(html.includes('id="workbench-recording"'), `Missing real recording: ${route}`);
  assert.ok(html.includes('type="video/mp4"') && html.includes('kind="captions"'), `Recording format/captions missing: ${route}`);
  for (const match of html.matchAll(/(?:src|poster)="(\/images\/workbench\/[^"]+)"/g)) {
    const asset = match[1];
    assert.ok((await stat("out" + asset)).isFile(), `Missing rendered image: ${asset}`);
    assert.ok(!/\/common\/|\/revops\/pipeline\.webp|\/account-success\/twin-action\.webp/.test(asset),
      `Rejected capture rendered as showcase: ${asset}`);
  }
}
const indexHtml = await readFile("out/index.html", "utf8");
assert.ok(indexHtml.includes("Interactive Storyboard"), "Missing Interactive Storyboard on corporate index");
for (const file of ["workbench-shell-20261014.mp4", "workbench-shell-20261014.vtt"]) {
  assert.ok((await stat("out/videos/workbench/" + file)).size > 0, `Recording asset missing: ${file}`);
}
const recording = JSON.parse(await readFile("docs/WORKBENCH-RECORDING-PROVENANCE.json", "utf8"));
for (const asset of recording.assets) {
  const emitted = "out/" + asset.path.replace(/^public\//, "");
  for (const file of [asset.path, emitted]) {
    const digest = createHash("sha256").update(await readFile(file)).digest("hex");
    assert.equal(digest, asset.sha256, `Recording provenance digest mismatch: ${file}`);
  }
}
const canvas = JSON.parse(await readFile("docs/WORKBENCH-CANVAS-PROVENANCE.json", "utf8"));
for (const capture of canvas.captures) {
  for (const file of [capture.path, "out/" + capture.path.replace(/^public\//, "")]) {
    const digest = createHash("sha256").update(await readFile(file)).digest("hex");
    assert.equal(digest, capture.sha256, `Canvas capture provenance digest mismatch: ${file}`);
  }
}
const nativeShell = JSON.parse(await readFile("docs/WORKBENCH-NATIVE-SHELL-PROVENANCE.json", "utf8"));
for (const capture of nativeShell.captures) {
  for (const file of [capture.path, "out/" + capture.path.replace(/^public\//, "")]) {
    const digest = createHash("sha256").update(await readFile(file)).digest("hex");
    assert.equal(digest, capture.sha256, `Native shell capture provenance digest mismatch: ${file}`);
    const dimensions = await sharp(file).metadata();
    assert.equal(dimensions.width, capture.width, `Native shell capture width mismatch: ${file}`);
    assert.equal(dimensions.height, capture.height, `Native shell capture height mismatch: ${file}`);
  }
}
const dashboards = JSON.parse(await readFile("docs/WORKBENCH-EDITABLE-DASHBOARD-PROVENANCE.json", "utf8"));
for (const capture of dashboards.captures) {
  for (const file of [capture.path, "out/" + capture.path.replace(/^public\//, "")]) {
    const digest = createHash("sha256").update(await readFile(file)).digest("hex");
    assert.equal(digest, capture.sha256, `Editable dashboard provenance digest mismatch: ${file}`);
    const dimensions = await sharp(file).metadata();
    assert.equal(dimensions.width, capture.width, `Editable dashboard width mismatch: ${file}`);
    assert.equal(dimensions.height, capture.height, `Editable dashboard height mismatch: ${file}`);
  }
}
for (const route of ["product"]) {
  const html = await readFile(`out/${route}.html`, "utf8");
  assert.ok(html.includes('id="workbench-dashboards"'), `Missing editable dashboard showcase: ${route}`);
  assert.ok(html.includes("/images/workbench/editable-dashboard/overview-20261015.webp"), `Missing authentic dashboard capture: ${route}`);
  assert.ok(html.includes("Dashboard views") && html.includes("Canvas views"), `Dashboard and Canvas peers missing: ${route}`);
  assert.ok(html.includes("Sidebar structure"), `Missing native sidebar explorer: ${route}`);
  assert.ok(html.includes("/images/workbench/native-shell/document-20261015.webp"), `Missing complete native shell: ${route}`);
  assert.ok(!html.includes("/images/workbench/canvas/document-20261015.webp"), `Superseded isolated component is still rendered: ${route}`);
}
console.log(`Workbench captures verified: ${primary.length} provenance entries, ${files.length} image assets, rendered labels and image references.`);
