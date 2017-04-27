'use strict'

const store = require('../store')

const signUpSuccess = (data) => {
  console.log('sign up worked!')
  $('#divCheckbox').css('display', 'block')
  $('#divCheckbox').text('Sign-up Successful!')
  $('#sign-up').trigger('reset')
}

const signUpFailure = (error) => {
  $('#divCheckbox').css('display', 'block')
  $('#divCheckbox').text('Cmon, dont BS me. Sign-up Failed!')
  console.log('sign up failed')
  console.error(error)
}
const signInSuccess = (data) => {
  console.log('sign in success ran. data: ', data)
  $('#divCheckbox').css('display', 'block')
  $('#divCheckbox').text('Sign-in Successful! Lets Rage!')
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
  $('#divCheckbox').css('display', 'block')
  $('#divCheckbox').text('Cmon, dont BS me. Sign-in Failed!')
  console.error('sign in failure ran. data: ', error)
}
const signOutSuccess = () => {
  console.log('sign out worked')
  $('#divCheckbox').css('display', 'block')
  $('#divCheckbox').text('Sign-out Successful! CYA!')
  $('.signOut').css('display', 'none')
  $('.pw').css('display', 'none')
  $('#contentBody').hide()
  $('#loggedInRow').css('display', 'none')
  $('#signUpRow').show()
  $('.sign-up').show()
  $('#sign-in').show()
  $('#sign-in').trigger('reset')
  store.user = null
}

const signOutFailure = (error) => {
  $('#divCheckbox').css('display', 'block')
  $('#divCheckbox').text('Cmon, dont BS me. Sign-out Failed!')
  console.error('sign in failure ran. data: ', error)
}
const changePasswordSuccess = (data) => {
  $('#sign-in').show()
  $('.pw').trigger('reset')
  $('#divCheckbox').css('display', 'block')
  $('#divCheckbox').text('Password changed!')
  // console.log('Change password worked!')
  // store whatver you get back from the request so you can use it later
}

const changePasswordFailure = (error) => {
  $('#divCheckbox').css('display', 'block')
  $('#divCheckbox').text('Cmon, dont BS me. Failed to change pw!')
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
