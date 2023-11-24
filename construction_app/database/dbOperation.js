const config = require("./dbConfig");
sql = require("mssql");

const getTest = async () => {
  try {
    let pool = await sql.connect(config);

    let data = await pool.request().query("select * from Test");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const createCustomer = async (customer) => {
  try {
    let pool = await sql.connect(config);
    let data = await pool.request().query(
      `insert into Customers(FirstName, LastName, Email, Password, Street1, City, State, Zipcode) 
      values ('${customer.first}', '${customer.last}', '${customer.email}', '${
        customer.pass
      }', '${customer.street}', '${customer.city}', '${
        customer.state
      }', ${parseInt(customer.zip)})`
    );
  } catch (error) {
    console.log(error);
  }
};

const getLogin = async (email) => {
  try {
    let pool = await sql.connect(config);
    console.log(email.email);
    let data = await pool
      .request()
      .query(`Select password from customers where email = '${email.email}'`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const createEstimate = async (estimate) => {
    try {
      let pool = await sql.connect(config);
       await pool.request().query(
        `insert into quotes (CustomerID, QuoteDate, Street1, City, State, Zip)
        values ('${estimate.CustomerID}', '${estimate.ScheduleDate}', '${customer.email}', '${
          customer.pass
        }', '${customer.street}', '${customer.city}', '${
          customer.state
        }', ${parseInt(customer.zip)})`
      );
    } catch (error) {
      console.log(error);
    }
  };

const createTest = async (data) => {
  try {
    let pool = await sql.connect(config);
    let pass = await pool
      .request()
      .query(`insert into Test(firstNme) values('${data.name}')`);
    return pass;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getTest,
  createCustomer,
  createTest,
  getLogin,
};
