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
  const data = getFormFields(this)
  api.createWorkouts(data)
    .then(ui.createWorkoutsSuccess)
    .catch(ui.failure)
}
const onDeleteSingleWorkout = function (event) {
  event.preventDefault()
  const id = $(this).attr('data-id')
  $(this).closest('li').hide()
  api.deleteWorkout(id)
  .then(ui.deleteWorkoutsSuccess)
  .catch(ui.failure)
}
const onToggleUpdate = function (event) {
  event.preventDefault()
  const id = $(this).attr('data-id')
  $('#updateForm' + id).slideToggle()
}
const onSubmitUpdate = function (event) {
  event.preventDefault()
  const id = $(this).attr('id')
  const data = getFormFields(this)
  $(this).closest('div').slideToggle()
  $('#updateSuccess' + id).css('display', 'block')
  // $(this + id).html(data)
  api.updateWorkout(id, data)
  .then(ui.updateWorkoutsSuccess)
  .catch(ui.failure)
}
const onHelpVideos = function (event) {
  event.preventDefault()
  $('#videos').slideToggle()
}
const onMotivation = function (event) {
  event.preventDefault()
  $('#motivation').slideToggle()
}

const addHandlers = () => {
  $('#getWorkoutsButton').on('click', onGetWorkouts)
  $('#workoutForm').on('submit', onCreateWorkouts)
  $('#clearWorkoutsButton').on('click', onClearWorkouts)
  $('.showWorkoutForm').on('click', '.deleteButton', onDeleteSingleWorkout)
  $('.showWorkoutForm').on('click', '.updateButton', onToggleUpdate)
  $('.showWorkoutForm').on('submit', '.updateForm', onSubmitUpdate)
  $('#helpButton').on('click', onHelpVideos)
  $('#motivationButton').on('click', onMotivation)
  $('[data-toggle="tooltip"]').tooltip({trigger: 'hover'})
  // $('#updateInput').on('submit', onSubmitUpdate)
}

module.exports = {
  addHandlers
}
