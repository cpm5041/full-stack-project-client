'use strict'
// TODO: change the url to the database
const app = require('../app.js')
const store = require('../store')

const getWorkouts = function () {
  return $.ajax({
    url: app.host + '/workouts', // "http://book-json.herokuapp.com/books"
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const createWorkouts = function (data) {
  return $.ajax({
    // config.apiOrigins
    url: app.host + '/workouts', // "http://book-json.herokuapp.com/books"
    method: 'POST',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const deleteWorkout = function (id) {
  return $.ajax({
    // config.apiOrigins
    url: app.host + '/workouts/' + id, // "http://book-json.herokuapp.com/books"
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
// const getWorkout = function () {
//   return $.ajax({
//     url: app.host + '/workouts', // "http://book-json.herokuapp.com/books"
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
module.exports = {
  getWorkouts,
  createWorkouts,
  deleteWorkout
}
