// ### Write Accounts API

// - Manually test your endpoints with a REST client like `Insomnia` or `Postman` to check they are working as expected.

// - Write CRUD for the `accounts` resource, using the middlewares and model functions above wherever appropriate:
const express = require('express');
// const Account = require('./accounts-model');
// const { checkAccountPayload, checkAccountNameUnique, checkAccountId } = require('./accounts-middleware');

const router = express.Router();
// const router = require('express').Router()

//   - `[GET] /api/accounts` returns an array of accounts (or an empty array if there aren't any).
router.get('/', (req, res, next) => {
  // DO YOUR MAGIC
})

//   - `[GET] /api/accounts/:id` returns an account by the given id.
router.get('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

//   - `[POST] /api/accounts` returns the created account. Leading or trailing whitespace on budget `name` should be trimmed before saving to db.
router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
})

//   - `[PUT] /api/accounts/:id` returns the updated account. Leading or trailing whitespace on budget `name` should be trimmed before saving to db.
router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

//   - `[DELETE] /api/accounts/:id` returns the deleted account.
router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

module.exports = router;
