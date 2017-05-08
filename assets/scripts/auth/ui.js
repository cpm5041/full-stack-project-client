'use strict'

const store = require('../store')

const signUpSuccess = (data) => {
  console.log('sign up worked!')
  $('#divCheckbox').css('display', 'block')
  $('#divCheckbox').text('Sign-up Successful!')
  $('#sign-up').trigger('reset')
  $('#divCheckboxFailure').css('display', 'none')
}

const signUpFailure = (error) => {
  $('#divCheckbox').css('display', 'none')
  $('#divCheckboxFailure').css('display', 'block')
  $('#divCheckboxFailure').text('Cmon, dont BS me. Sign-up Failed!')
  $('#sign-up').trigger('reset')
  console.log('sign up failed')
  console.error(error)
}
const signInSuccess = (data) => {
  console.log('sign in success ran. data: ', data)
  $('#divCheckbox').css('display', 'block')
  $('#divCheckbox').text('Sign-in Successful! Lets Rage!')
  $('#divCheckboxFailure').css('display', 'none')
  $('.signOut').css('display', 'block')
  $('.pw').css('display', 'block')
  $('#contentBody').css('display', 'block')
  $('#loggedInRow').css('display', 'block')
  $('#signUpRow').hide()
  $('.sign-up').hide()
  $('#sign-in').hide()
  $('#sign-in').trigger('reset')
  store.user = data.user
}

const signInFailure = (error) => {
  $('#divCheckboxFailure').css('display', 'block')
  $('#divCheckboxFailure').text('Cmon, dont BS me. Sign-in Failed!')
  $('#divCheckbox').css('display', 'none')
  console.error('sign in failure ran. data: ', error)
}
const signOutSuccess = () => {
  console.log('sign out worked')
  $('#divCheckbox').css('display', 'block')
  $('#divCheckboxFailure').css('display', 'none')
  $('#divCheckbox').text('Sign-out Successful! CYA!')
  $('.signOut').css('display', 'none')
  $('.pw').css('display', 'none')
  $('#contentBody').hide()
  $('#workoutDiv').hide()
  $('#loggedInRow').css('display', 'none')
  $('#signUpRow').show()
  $('.sign-up').show()
  $('#sign-in').show()
  $('#sign-in').trigger('reset')
  $('.showWorkoutForm').css('display', 'none')
  $('.showWorkoutForm').trigger('reset')
  $('#bicep').css('display', 'none')
  $('#workoutButtons').css('display', 'none')
  $('#workoutStats').css('display', 'none')
  store.user = null
}

const signOutFailure = (error) => {
  $('#divCheckboxFailure').css('display', 'block')
  $('#divCheckboxFailure').text('Cmon, dont BS me. Sign-out Failed!')
  $('#divCheckbox').css('display', 'none')
  console.error('sign in failure ran. data: ', error)
}
const changePasswordSuccess = (data) => {
  $('#sign-in').show()
  $('#divCheckboxFailure').css('display', 'none')
  $('.pw').trigger('reset')
  $('#divCheckbox').css('display', 'block')
  $('#divCheckbox').text('Password changed!')
  // console.log('Change password worked!')
  // store whatver you get back from the request so you can use it later
}

const changePasswordFailure = (error) => {
  $('#divCheckboxFailure').css('display', 'block')
  $('#divCheckboxFailure').text('Cmon, dont BS me. Failed to change pw!')
  $('#divCheckbox').css('display', 'none')
  console.error('Change password failure ran. data: ', error)
}
// const createSuccess = (data) => {
//   $('.welcome').text('Play some Tic-Tac-Toe!')
//   $('.box').text('&nbsp;')
//   $('.box').html('&nbsp;')
//   $('.game-board').show()
//   $('#stats').show()
//   store.game = data.game
// }
//
// const createFailure = (error) => {
//   console.error('error! ' + error)
// }
// const submitSuccess = (id) => {
//   // store whatver you get back from the request so you can use it later
// }
//
// const submitFailure = (error) => {
//   console.error('Submit failure ran. data: ', error)
// }
//
// const indexSuccess = (data) => {
//   store.games = data.games
//   // const gameCount = data.games.length
//   // console.log('game count is ', data.games.length)
//   $('#games-played').text('Games completed: ' + data.games.length)
// }

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
