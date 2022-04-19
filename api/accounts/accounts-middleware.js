const Account = require("./accounts-model");

function checkAccountPayload(req, res, next) {
  let { name, budget } = req.body;
  let budgetCheck = isNaN(budget);

  if (!name || !budget) {
    res.status(400).json({ message: "name and budget are required" })
  } else if (name.trim().length < 3 || name.trim().length > 100) {
    
    res.status(400).json({ message: "name of account must be between 3 and 100" })
  } else if (budgetCheck === true) {
    res.status(400).json({ message: "must be a number" })


  } else if (Number(budget < 0) || Number(budget) > 1000000) {
    res.status(400).json({ message: "too large or too small" })
  } else {
    next();
  }

}

async function checkAccountNameUnique(req, res, next) {
  Account.getByName(req.body.name)
    .then((account) => {
      if (account) {
        res.status(400).json({ message: "name is taken"})
      }
    })
  next();
}

function checkAccountId(req, res, next) {
  Account.getById(req.params.id)
    .then((account) => {
      if (account) {
        req.account = account;
        next();
      } else {
        res.status(404).json({ message: "account not found" });
      }
    })
}

module.exports = {
  checkAccountPayload,
  checkAccountNameUnique,
  checkAccountId,
};
