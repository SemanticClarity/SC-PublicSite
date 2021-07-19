// Web Service
const PORT = (process.env.PORT) ? process.env.PORT : 8080;
const localWebServiceURI = `http://localhost:${PORT}`;
const ALLOWED_ORIGINS = [ localWebServiceURI ];
const ABOUT = "The Semantic Clarity Public Site";
const mode = (process.env.NODE_ENV) ? process.env.NODE_ENV : "development";
const ENVIRONMENT = mode;

const DEFAULT_TTL = 10;
const YEAR = (ENVIRONMENT === "production") ? 31536000 : DEFAULT_TTL;
const MONTH = (ENVIRONMENT === "production") ? 2592000 : DEFAULT_TTL;
const DAY = (ENVIRONMENT === "production") ? 86400 : DEFAULT_TTL;
const MINUTE = (ENVIRONMENT === "production") ? 60 : DEFAULT_TTL;

module.exports = { ENVIRONMENT, ALLOWED_ORIGINS, ABOUT, PORT, DEFAULT_TTL, YEAR, MONTH, DAY, MINUTE };