const BaseLogger = require("next-core-logger");
const Level = BaseLogger.Level;
const BasicLogger = BaseLogger.BasicLogger;
const IconLogger = require("./icon.js");
let Logger = null;

if (process.env.NODE_ENV && process.env.NODE_ENV === "production") {
  Logger = new BasicLogger(Level.DEBUG);
} else {
  Logger = new IconLogger(Level.DEBUG);
}

module.exports = Logger;
