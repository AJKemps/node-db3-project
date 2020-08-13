const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({ id }).first();
}

function findSteps(schemeID) {
  return db("steps").where({ scheme_id: schemeID }).orderBy("step_number");
}

function add(scheme) {
  return db("schemes")
    .insert(scheme)
    .returning("id")
    .then((response) => {
      const id = response[0];

      return findById(id);
    });
}

function update() {
  return; //
}
function remove() {
  return; //
}
