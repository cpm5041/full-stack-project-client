'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const onGetWorkouts = (event) => {
  console.log('workout button clicked')
  event.preventDefault()
  api.getWorkouts()
    .then(ui.getWorkoutsSuccess)
    .catch(ui.failure)
}

const onClearWorkouts = (event) => {
  event.preventDefault()
  ui.clearWorkouts()
}

const addHandlers = () => {
  $('#getWorkoutsButton').on('click', onGetWorkouts)
  $('#clearWorkoutsButton').on('click', onClearWorkouts)
}

module.exports = {
  addHandlers
}
