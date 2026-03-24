import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const supportPage = readFileSync(
  resolve("/Users/chenhuanjie/Desktop/showleafy-c/showleafy-site/support/index.html"),
  "utf8"
);

const privacyPage = readFileSync(
  resolve("/Users/chenhuanjie/Desktop/showleafy-c/showleafy-site/privacy/index.html"),
  "utf8"
);

const privacyPageEn = readFileSync(
  resolve("/Users/chenhuanjie/Desktop/showleafy-c/showleafy-site/en/privacy/index.html"),
  "utf8"
);

const supportPageEn = readFileSync(
  resolve("/Users/chenhuanjie/Desktop/showleafy-c/showleafy-site/en/support/index.html"),
  "utf8"
);

function countMatches(text, pattern) {
  return (text.match(pattern) || []).length;
}

test("support page uses the same landing chrome as homepage", () => {
  assert.match(supportPage, /<body class="landing subpage">/);
  assert.match(supportPage, /class="site-header"/);
  assert.match(supportPage, /<a class="brand" href="\.\.\/" aria-label="手页首页">/);
  assert.match(supportPage, /<a href="\.\.\/#features">功能<\/a>/);
  assert.match(supportPage, /<a href="\.\/" aria-current="page">支持<\/a>/);
  assert.match(supportPage, /<a href="\.\.\/privacy\/">隐私政策<\/a>/);
  assert.match(supportPage, /href="\.\.\/#download">下载 App<\/a>/);
});

test("support page has a redesigned support hero and card layout", () => {
  assert.match(supportPage, /class="subpage-hero"/);
  assert.match(supportPage, /需要帮助的时候，[\s\S]*这一页也在/);
  assert.match(supportPage, /class="support-grid"/);
  assert.match(supportPage, />联系支持</);
  assert.match(supportPage, />通常回复</);
  assert.match(supportPage, />写邮件时建议附带</);
  assert.match(supportPage, />相关入口</);
  assert.match(supportPage, /support@showleafy\.com/);
  assert.match(supportPage, /<a[^>]*href="\.\.\/privacy\/"[^>]*>查看隐私政策<\/a>/);
});

test("support page includes an english language switch", () => {
  assert.match(supportPage, /<header class="site-header">[\s\S]*<div class="terms-language-switch nav-language-switch" aria-label="语言切换">[\s\S]*<span class="terms-language-link is-active" aria-current="page">中文<\/span>[\s\S]*<a class="terms-language-link" href="\.\.\/en\/support\/" lang="en">EN<\/a>[\s\S]*<\/header>/);
  assert.equal(countMatches(supportPage, /class="terms-language-switch/g), 1);
});

test("privacy page uses the same landing chrome as homepage", () => {
  assert.match(privacyPage, /<body class="landing subpage">/);
  assert.match(privacyPage, /class="site-header"/);
  assert.match(privacyPage, /<a class="brand" href="\.\.\/" aria-label="手页首页">/);
  assert.match(privacyPage, /<a href="\.\.\/#features">功能<\/a>/);
  assert.match(privacyPage, /<a href="\.\.\/support\/">支持<\/a>/);
  assert.match(privacyPage, /<a href="\.\/" aria-current="page">隐私政策<\/a>/);
  assert.match(privacyPage, /href="\.\.\/#download">下载 App<\/a>/);
});

test("privacy page uses a conventional terms-style layout", () => {
  assert.match(privacyPage, /class="terms-hero"/);
  assert.match(privacyPage, /<link rel="canonical" href="https:\/\/www\.showleafy\.com\/privacy\/">/);
  assert.match(privacyPage, /<h1>隐私政策<\/h1>/);
  assert.match(privacyPage, /最后更新：2026-03-24/);
  assert.match(privacyPage, /<header class="site-header">[\s\S]*<div class="terms-language-switch nav-language-switch" aria-label="语言切换">[\s\S]*<span class="terms-language-link is-active" aria-current="page">中文<\/span>[\s\S]*<a class="terms-language-link" href="\.\.\/en\/privacy\/" lang="en">EN<\/a>[\s\S]*<\/header>/);
  assert.equal(countMatches(privacyPage, /class="terms-language-switch/g), 1);
  assert.match(privacyPage, /<link rel="alternate" hreflang="x-default" href="https:\/\/www\.showleafy\.com\/privacy\/">/);
  assert.match(privacyPage, /class="terms-document"/);
  assert.match(privacyPage, /class="terms-section"/);
  assert.match(privacyPage, />1\. 适用范围</);
  assert.match(privacyPage, />3\. 当前产品形态</);
  assert.match(privacyPage, />8\. 数据保留与删除</);
  assert.match(privacyPage, />11\. 政策更新</);
  assert.match(privacyPage, /support@showleafy\.com/);
  assert.match(privacyPage, /导入图片或导出图片到系统相册/);
  assert.match(privacyPage, /不进行跨 App 跟踪/);
  assert.match(privacyPage, /不接入第三方广告 SDK/);
  assert.match(privacyPage, /不接入第三方统计\/分析 SDK/);
  assert.match(privacyPage, /法律依据/);
  assert.match(privacyPage, /履行你主动请求的支持、购买处理、恢复购买或其他服务所必需/);
  assert.match(privacyPage, /你的同意/);
  assert.match(privacyPage, /合法利益/);
  assert.match(privacyPage, /邮件主题注明“隐私权请求”/);
  assert.match(privacyPage, /15 个工作日内答复/);
  assert.match(privacyPage, /可能存储在中国大陆以外的服务器/);
  assert.match(privacyPage, /在中国大陆以外完成传输与处理/);
  assert.doesNotMatch(privacyPage, /class="policy-grid"/);
  assert.doesNotMatch(privacyPage, /class="subpage-panel"/);
  assert.doesNotMatch(privacyPage, /class="subpage-cta"/);
});

test("english privacy page exists with mirrored terms structure", () => {
  assert.match(privacyPageEn, /<html lang="en">/);
  assert.match(privacyPageEn, /<link rel="canonical" href="https:\/\/www\.showleafy\.com\/en\/privacy\/">/);
  assert.match(privacyPageEn, /<link rel="alternate" hreflang="x-default" href="https:\/\/www\.showleafy\.com\/privacy\/">/);
  assert.match(privacyPageEn, /<header class="site-header">[\s\S]*<div class="terms-language-switch nav-language-switch" aria-label="Language switch">[\s\S]*<a class="terms-language-link" href="\.\.\/\.\.\/privacy\/" lang="zh-CN">中文<\/a>[\s\S]*<span class="terms-language-link is-active" aria-current="page">EN<\/span>[\s\S]*<\/header>/);
  assert.equal(countMatches(privacyPageEn, /class="terms-language-switch/g), 1);
  assert.match(privacyPageEn, /<h1>Privacy Policy<\/h1>/);
  assert.match(privacyPageEn, /Last updated: March 24, 2026/);
  assert.match(privacyPageEn, /class="terms-document"/);
  assert.match(privacyPageEn, />1\. Scope</);
  assert.match(privacyPageEn, />6\. Purposes and Legal Bases</);
  assert.match(privacyPageEn, />7\. Third-Party Services and Cross-Border Transfers</);
  assert.match(privacyPageEn, /support@showleafy\.com/);
});

test("english support page mirrors the support layout and links", () => {
  assert.match(supportPageEn, /<html lang="en">/);
  assert.match(supportPageEn, /<body class="landing subpage">/);
  assert.match(supportPageEn, /<a class="brand" href="\.\.\/" aria-label="Showleafy home">/);
  assert.match(supportPageEn, /<a href="\.\.\/#features">Features<\/a>/);
  assert.match(supportPageEn, /<a href="\.\/" aria-current="page">Support<\/a>/);
  assert.match(supportPageEn, /<a href="\.\.\/privacy\/">Privacy<\/a>/);
  assert.match(supportPageEn, /<header class="site-header">[\s\S]*<div class="terms-language-switch nav-language-switch" aria-label="Language switch">[\s\S]*<a class="terms-language-link" href="\.\.\/\.\.\/support\/" lang="zh-CN">中文<\/a>[\s\S]*<span class="terms-language-link is-active" aria-current="page">EN<\/span>[\s\S]*<\/header>/);
  assert.equal(countMatches(supportPageEn, /class="terms-language-switch/g), 1);
  assert.match(supportPageEn, />\s*Support when you need it/);
  assert.match(supportPageEn, />Email support</);
  assert.match(supportPageEn, />Usually replies in/);
  assert.match(supportPageEn, /support@showleafy\.com/);
});
