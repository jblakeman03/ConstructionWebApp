const sql = reuire("mssql");
const config = {
  user: "TestLogin",
  password: "Passw0rd123#",
  server: "localhost",
  database: "BlakemanBrothers",
  options: {
    trustServerCertificate: true,
  },
};

const pool = new sql.ConnectionPool(config);

pool.connect((err) => {
  if (err) {
    console.log("Database Connection failed:", err);
  } else {
    console.log("Conected to SQL Server");
  }
});

module.exports = pool;
