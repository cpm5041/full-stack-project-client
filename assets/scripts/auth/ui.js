'use strict'

const store = require('../store')

const signUpSuccess = (data) => {
  console.log('sign up worked!')
  $('#sign-up').trigger('reset')
}

const signUpFailure = (error) => {
  console.log('sign up failed')
  console.error(error)
}
const signInSuccess = (data) => {
  console.log('sign in success ran. data: ', data)
  $('#divCheckbox').css('display', 'block')
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
  console.error('sign in failure ran. data: ', error)
}
const signOutSuccess = () => {
  console.log('sign out worked')
  $('#divCheckbox').css('display', 'none')
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
  $('.userNotification').text('Signed out failed!')
  console.error('sign in failure ran. data: ', error)
}
const changePasswordSuccess = (data) => {
  $('#sign-in').show()
  $('.pw').trigger('reset')
  // console.log('Change password worked!')
  // store whatver you get back from the request so you can use it later
}

const changePasswordFailure = (error) => {
  $('.userNotification').text('Password Change failed, try again!')
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
