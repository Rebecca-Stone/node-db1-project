const db = require("../../data/db-config");


function getAll() {
  return db("accounts");
}

function getByName(name) {
  return db("accounts").where("name", name).first();
}

function getById(id) {
  return db("accounts").where("id", id).first();
}

//   - `create` resolves to the newly created account
async function create({name, budget}) {
  await db("accounts").insert({ name: name, budget: budget});
  return getByName(name);
}

//   - `updateById` resolves to the updated account
async function updateById(id, { name, budget }) {
  // let trimmedName = name.trim();
  await db("accounts").where("id", id).update({ name: name, budget: budget });
  return getById(id);
}

async function deleteById(id) {
  let deletedAccount = await getById(id);
  await db("accounts").where("id", id).del();
  return deletedAccount;
}

module.exports = {
  getAll,
  getById,
  getByName,
  create,
  updateById,
  deleteById,
};

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
