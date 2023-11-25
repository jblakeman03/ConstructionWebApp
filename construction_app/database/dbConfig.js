const config = {
  user: "WebApp",
  password: "Password123",
  server: "COLES_SURFACE",
  database: "BlakemanBrothers",
  options: {
    trustServerCertificate: true,
    trustConnection: false,
    enableArithAbort: true,
  },
  port: 1433,
};
module.exports = config;
