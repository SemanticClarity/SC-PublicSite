const BaseLogger = require("next-core-logger");
const Level = BaseLogger.Level;

class IconLogger extends BaseLogger.ColorConsoleLogger {
  constructor(l) {
    super(l);
    this.loggerLevel = (l) ? l : Level.INFO;
    this.label = Level;
    this.TIME_SEPERATOR = ":";
    this.DATE_SEPERATOR = "-";
    this.OPEN_GROUP = " [ ";
    this.CLOSE_GROUP = " ] ";
  };

  _getLogTime() {
    const now = new Date();
    const s = `${now.getFullYear()}${this.DATE_SEPERATOR}${(now.getMonth() + 1)}${this.DATE_SEPERATOR}${now.getDate()} ${now.getHours()}${this.TIME_SEPERATOR}${now.getMinutes()}${this.TIME_SEPERATOR}${now.getSeconds()}${this.TIME_SEPERATOR}${now.getMilliseconds()}`;
    return s.padEnd(23, " ");
  };

  /**
   * log a message with default level
   * @param {string} message The message to log
   * @param {Logger.Level} level The level of the log message
   * @returns {Any} The message
   */
  log(...message) {
    return this.info(...message);
  };

  /**
   * Logs a message in info level
   * @param {Any} message
   */
  info(...message) {
    return this._logMe(Level.INFO, `${this._getLogTime()} ⓘ `, ...message);
  };

  /**
   * Log a message in error level
   * @param {Any} message
   */
  error(...message) {
    return this._logMe(Level.ERROR, `${this._getLogTime()} ⓔ `, ...message);
  };

  /**
   * Log a message in debug level
   * @param {Any} message
   */
  debug(...message) {
    return this._logMe(Level.DEBUG, `${this._getLogTime()} ⓓ `, ...message);
  };

  /**
   * Log a message in warn level
   * @param {Any} message
   */
  warn(...message) {
    return this._logMe(Level.WARN, `${this._getLogTime()} ⓦ `, ...message);
  };
};

module.exports = IconLogger;
