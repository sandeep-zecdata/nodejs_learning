const exampleLogger = require("./exampleLogger")
let logger = null;

if (process.env.NODE_ENV !== 'production') {
    logger = exampleLogger();
  }

  module.exports = logger;