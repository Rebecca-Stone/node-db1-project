// #### Write Model Functions

// - Write the following db access functions inside `api/accounts/accounts-model.js` using Knex:

//   - `getAll` resolves to an array of accounts (or an empty array)
const getAll = () => {
  // DO YOUR MAGIC
}

//   - `getById` resolves to an account by the given id
const getById = id => {
  // DO YOUR MAGIC
}

//   - `create` resolves to the newly created account
const create = account => {
  // DO YOUR MAGIC
}

//   - `updateById` resolves to the updated account
const updateById = (id, account) => {
  // DO YOUR MAGIC
}

//   - `deleteById` resolves to the deleted account
const deleteById = id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}


// - Here is a cheatsheet for working with SQLite with Knex:

// db('foo-table') 
// returns a promise that resolves to an **array** with all records in the table

// db('foo-table').where({ role: 'Student', active: true }) 
// resolves to an **array** of all records that satisfy the where

// db('foo-table').where('name', 'Mary') 
// is an alternative for when there is just one where condition

// db('foo-table').where('id', 7).first() 
// will resolve to the **record** we want (if the id is unique for a table) or undefined

// db('foo-table').insert({ bar: 'baz' }) 
// resolves to an **array** containing the **ids of the records** inserted into the table

// db('foo-table').where('id', id).update({ bar: 'new bar' }) 
// resolves to the **number of records** affected by the update

// db('foo-table').where('id', id).delete() 
// resolves to the **number of records** affected by the delete