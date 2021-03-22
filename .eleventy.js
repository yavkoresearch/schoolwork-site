module.exports = {
  dir: {
    output: "_site",
  },
};
module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);

    eleventyConfig.addPassthroughCopy("static");
};
