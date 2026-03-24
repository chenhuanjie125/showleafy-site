import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const homepage = readFileSync(
  resolve("/Users/chenhuanjie/Desktop/showleafy-c/showleafy-site/index.html"),
  "utf8"
);

const homepageEn = readFileSync(
  resolve("/Users/chenhuanjie/Desktop/showleafy-c/showleafy-site/en/index.html"),
  "utf8"
);

function countMatches(text, pattern) {
  return (text.match(pattern) || []).length;
}

test("homepage includes the redesigned section structure", () => {
  assert.match(homepage, /id="features"/);
  assert.match(homepage, /id="use-cases"/);
  assert.match(homepage, /id="belief"/);
  assert.match(homepage, /id="download"/);
  assert.match(homepage, /这一页，[\s\S]*在你手里/);
  assert.match(homepage, /你想让这一页成为什么，[\s\S]*它就是什么/);
});

test("homepage keeps support, privacy, and contact entry points", () => {
  assert.match(homepage, /href="support\/"/);
  assert.match(homepage, /href="privacy\/"/);
  assert.match(homepage, /support@showleafy\.com/);
});

test("homepage keeps the figma navigation, ctas, and image content", () => {
  assert.match(homepage, />功能</);
  assert.match(homepage, /<a href="support\/">支持<\/a>/);
  assert.match(homepage, />下载 App</);
  assert.match(homepage, /<header class="site-header">[\s\S]*<div class="terms-language-switch nav-language-switch" aria-label="语言切换">[\s\S]*<span class="terms-language-link is-active" aria-current="page">中文<\/span>[\s\S]*<a class="terms-language-link" href="en\/" lang="en">EN<\/a>[\s\S]*<\/header>/);
  assert.equal(countMatches(homepage, /class="terms-language-switch/g), 1);
  assert.match(homepage, />开始使用</);
  assert.match(homepage, />了解更多</);
  assert.match(homepage, />iOS \/ Android</);
  assert.match(homepage, />完全私密</);
  assert.match(homepage, /alt="手页应用界面"/);
  assert.match(homepage, /alt="日记"/);
  assert.match(homepage, /alt="学习笔记"/);
  assert.match(homepage, /alt="创意画板"/);
  assert.match(homepage, /alt="旅行手帐"/);
  assert.match(homepage, /alt="手页笔记场景"/);
  assert.match(homepage, />关于我们</);
  assert.match(homepage, />用户协议</);
  assert.match(homepage, />联系我们</);
  assert.match(homepage, /<a href="privacy\/">隐私政策<\/a>/);
  assert.match(homepage, /支持 iOS 18\+，Android 敬请期待/);
  assert.doesNotMatch(homepage, /当前官网同步提供/);
});

test("english homepage mirrors the landing structure with english navigation", () => {
  assert.match(homepageEn, /<html lang="en">/);
  assert.match(homepageEn, /<link rel="canonical" href="https:\/\/www\.showleafy\.com\/en\/">/);
  assert.match(homepageEn, /<link rel="alternate" hreflang="zh-CN" href="https:\/\/www\.showleafy\.com\/">/);
  assert.match(homepageEn, /<link rel="alternate" hreflang="en" href="https:\/\/www\.showleafy\.com\/en\/">/);
  assert.match(homepageEn, /<header class="site-header">[\s\S]*<div class="terms-language-switch nav-language-switch" aria-label="Language switch">[\s\S]*<a class="terms-language-link" href="\.\.\/" lang="zh-CN">中文<\/a>[\s\S]*<span class="terms-language-link is-active" aria-current="page">EN<\/span>[\s\S]*<\/header>/);
  assert.equal(countMatches(homepageEn, /class="terms-language-switch/g), 1);
  assert.match(homepageEn, />Features</);
  assert.match(homepageEn, /<a href="support\/">Support<\/a>/);
  assert.match(homepageEn, /href="privacy\/">Privacy<\/a>/);
  assert.match(homepageEn, />Download App</);
  assert.match(homepageEn, />\s*This page,[\s\S]*is yours/);
  assert.match(homepageEn, />iOS 18\+<\/span>/);
  assert.match(homepageEn, />Android coming soon<\/span>/);
  assert.match(homepageEn, /<a href="mailto:support@showleafy\.com">Contact<\/a>/);
});
