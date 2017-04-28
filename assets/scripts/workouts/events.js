'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require(`../../../lib/get-form-fields`)

const onGetWorkouts = (event) => {
  event.preventDefault()
  api.getWorkouts()
    .then(ui.getWorkoutsSuccess)
    .catch(ui.failure)
}

const onClearWorkouts = (event) => {
  event.preventDefault()
  ui.clearWorkouts()
}
const onCreateWorkouts = function (event) {
  event.preventDefault()
  console.log('in create workout')
  console.log(this)
  const data = getFormFields(this)
  api.createWorkouts(data)
    .then(ui.createWorkoutsSuccess)
    .catch(ui.failure)
}
const addHandlers = () => {
  $('#getWorkoutsButton').on('click', onGetWorkouts)
  $('#workoutForm').on('submit', onCreateWorkouts)
  $('#clearWorkoutsButton').on('click', onClearWorkouts)
}

module.exports = {
  addHandlers
}
