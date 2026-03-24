import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const styles = readFileSync(
  resolve("/Users/chenhuanjie/Desktop/showleafy-c/showleafy-site/styles.css"),
  "utf8"
);

test("header nav links center-align with the download button while language switch stays compact", () => {
  assert.match(styles, /\.nav-links\s*\{[\s\S]*align-self:\s*center;/);
  assert.match(styles, /\.nav-actions\s*\{[\s\S]*align-items:\s*center;[\s\S]*align-self:\s*center;/);
  assert.match(styles, /\.terms-language-switch\.nav-language-switch\s*\{[\s\S]*gap:\s*4px;/);
  assert.match(styles, /\.terms-language-switch\.nav-language-switch\s*\{[\s\S]*align-self:\s*flex-end;/);
  assert.match(styles, /\.nav-language-switch\s+\.terms-language-link\s*\{[\s\S]*min-height:\s*32px;[\s\S]*font-size:\s*0\.78rem;/);
});

test("header language switch uses gray active styling", () => {
  assert.match(styles, /\.nav-language-switch\s+\.terms-language-link\.is-active\s*\{[\s\S]*background:\s*rgba\(229,\s*231,\s*235,\s*0\.96\);[\s\S]*border-color:\s*rgba\(209,\s*213,\s*219,\s*0\.95\);[\s\S]*color:\s*#4b5563;/);
});
