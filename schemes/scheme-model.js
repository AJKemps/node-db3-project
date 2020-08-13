const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
  addStep,
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

function update(changes, id) {
  return db("schemes")
    .where({ id })
    .update(changes)
    .then(() => {
      return findById(id);
    });
}
function remove(id) {
  return db("schemes").where({ id }).del();
}

function addStep(stepData, scheme_id) {
  return db("steps")
    .insert({
      step_number: stepData.step_number,
      instructions: stepData.instructions,
      scheme_id: scheme_id,
    })
    .returning(scheme_id)
    .then((response) => {
      let id = response[0];

      return db("steps").where({ id });
    });
}
