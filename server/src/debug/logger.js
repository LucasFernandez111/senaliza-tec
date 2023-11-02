const { createLogger, transports, format } = require("winston");
const options = {
  console: {
    level: "debug",
    handleExceptions: true,
    format: format.combine(
      format.colorize(),
      format.simple(),
      format.timestamp()
    ),
  },
};

const logger = createLogger({
  transports: [new transports.Console(options.console)],
});

module.exports = logger;
