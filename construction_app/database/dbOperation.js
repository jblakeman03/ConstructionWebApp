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

const checkQuote = async (quote) => {
  try {
    let pool = await sql.connect(config);

    let data = await pool.request().query(`select * from quotes where quoteID = ${quote.quoteID}`);
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
}

const checkProject = async (quote) => {
  try {
    let pool = await sql.connect(config);

    let data = await pool.request().query(`select * from projects where quoteID = ${quote.quoteID}`);
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
}

const checkEmailExistance = async (email) => {
  try {
    let pool = await sql.connect(config);
    let data = await pool.request().query(`select firstName from customers where email = '${email.email}'`);
    return data
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

const createProject = async (quote) => {
  try {
    let pool = await sql.connect(config);
    let projectInfo = await pool.request().query(`select QuoteID, CustomerID from quotes where QuoteID = ${quote.quoteID}`)
    console.log(projectInfo)
    await pool.request().query(
      `insert into projects
      values (${quote.quoteID}, ${projectInfo.recordset[0].CustomerID}, '${quote.bookDate}')`
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

const scheduleQuote = async (quote) => {
    try {
      console.log(quote.email)
      let pool = await sql.connect(config);
      const customer = await pool.request().query(`select customerID, Street1, city, state, zipcode from customers where email = '${quote.email}'`)
      console.log(customer)
      console.log(quote.scheduleDate)
      console.log(customer.recordset)
      console.log(customer.recordset[0].customerID)

      await pool.request().query(
        `insert into Quotes (CustomerID, QuoteDate, Street1, City, State, Zip)
        values (${customer.recordset[0].customerID}, '${quote.scheduleDate}','${customer.recordset[0].Street1}', '${customer.recordset[0].city}', '${customer.recordset[0].state}',${customer.recordset[0].zipcode})`
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
  scheduleQuote,
  checkEmailExistance, 
  checkQuote,
  createProject,
  checkProject
};
