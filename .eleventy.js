const fs = require("fs");
// const htmlmin = require("html-minifier");
// const markdownIt = require("markdown-it");
// const markdownItAnchor = require("markdown-it-anchor");
// const markdownItEmoji = require("markdown-it-emoji");
// const rss = require("@11ty/eleventy-plugin-rss");
module.exports = eleventyConfig => {
  // The following copies to `_site/img`
  eleventyConfig.addPassthroughCopy("src/img");
  // add support for RSS/atom
  // eleventyConfig.addPlugin(rss);
  // add markdown overrides
  // let markdownLib = markdownIt({
    // html: true,
    // breaks: true,
    // linkify: true
  // }).use(markdownItAnchor, {
    // permalink: true,
    // permalinkClass: "anchor-link",
    // permalinkSymbol: "#"
  // }).use(markdownItEmoji);
  // eleventyConfig.setLibrary("md", markdownLib);
  // add layout aliases to make templates more portable
  // eleventyConfig.addLayoutAlias("home", "layouts/home.njk");
  // return {
  //   templateFormats: ["njk", "md", "html", "png", "ico", "svg", "jpg", "jpeg", "gif", "pdf", "mp4", "webm", "vtt"],
  //   dir: {
  //     data: "_data",
  //     includes: "_includes",
  //     input: "src",
  //     output: "_site"
  //   },
  //   markdownTemplateEngine: "njk",
  //   htmlTemplateEngine: "njk",
  //   dataTemplateEngine: "njk",
  //   passthroughFileCopy: true
  // }
}
