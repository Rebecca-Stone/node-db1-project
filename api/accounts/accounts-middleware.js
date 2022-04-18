// #### Write Middleware
// - Write the following middlewares inside `api/accounts/accounts-middleware.js`:

// const Account = require('./accounts-model');

//   - `checkAccountPayload` returns a status 400 with if `req.body` is invalid:
exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC

  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)

  //     - If either name or budget are undefined, return `{ message: "name and budget are required" }`
  //     - If the _trimmed_ name is shorter than 3 or longer than 100, return `{ message: "name of account must be between 3 and 100" }`
  //     - If budget is not able to be converted into a number, return `{ message: "budget of account must be a number" }`
  //     - If budget is a negative number or over one million, return  `{ message: "budget of account is too large or too small" }`
};

//   - `checkAccountNameUnique` returns a status 400 with a `{ message: "that name is taken" }` if the _trimmed_ `req.body.name` already exists in the database
exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
};

//   - `checkAccountId` returns a status 404 with a `{ message: "account not found" }` if `req.params.id` does not exist in the database
exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
};


