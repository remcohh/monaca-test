const webpackConfig = require("../webpack.config.js");
const commonsChunkPluginIndex = webpackConfig.plugins.findIndex(
  plugin => plugin.chunkNames
);
webpackConfig.plugins.splice(commonsChunkPluginIndex, 1);

module.exports = function(config) {
  config.set({
    basePath: "../",
    frameworks: ["mocha", "chai-dom", "chai", "sinon"],
    files: ["test/spec/spec_helper.js", "test/spec/**/*.spec.js"],
    exclude: [],
    preprocessors: {
      "test/spec/**/*.*": ["webpack"]
    },
    // webpack configuration
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    reporters: ["mocha", "junit"],
    junitReporter: {
      outputDir: "reports"
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["ChromeHeadless"],
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,
    concurrency: Infinity
  });
};
