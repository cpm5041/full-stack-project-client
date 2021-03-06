'use strict'
//
const getFormFields = require(`../../../lib/get-form-fields`)
//
const api = require('./api.js')
const ui = require('./ui.js')
//
const onSignUp = function (event) {
  // this here is pointing to event.target from last lesson
  // grabbing all data out of the form, putting it into object
  const data = getFormFields(event.target)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
const onSignIn = function (event) {
  // this here is pointing to event.target from last lesson
  // grabbing all data out of the form, putting it into object
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
const showContentBody = function (event) {
  $('#contentBody').show()
}
const showWorkoutDiv = function (event) {
  console.log('track')
  $('#divCheckbox').css('display', 'none')
  $('#divCheckboxFailure').css('display', 'none')
  $('#workoutDiv').css('display', 'block')
}

const addShups = function (event) {
  event.preventDefault()

  console.log('someones doin some shups')
}
// // const onCreate = function (event) {
// //   event.preventDefault()
// //   const data = getFormFields(event.target)
// //   api.createGame(data)
// //     .then(ui.createSuccess)
// //     .catch(ui.createFailure)
// // }
//
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#track').on('click', showWorkoutDiv)
  // $('#sign-in').on('click', showContentBody)
  $('#shupsInput').on('submit', addShups)
  $('#saveWorkout').on('submit', addShups)
//   $('#create').on('click', onCreate)
}
//
module.exports = {
  addHandlers,
  showContentBody
}
