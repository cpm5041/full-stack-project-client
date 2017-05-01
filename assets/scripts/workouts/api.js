'use strict'
// TODO: change the url to the database
// const app = require('../app.js')
const config = require('../config.js')
const store = require('../store')

const getWorkouts = function () {
  return $.ajax({
    url: config.apiOrigin + '/workouts', // "http://book-json.herokuconfig.com/books"
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const createWorkouts = function (data) {
  return $.ajax({
    // config.apiOrigins
    url: config.apiOrigin + '/workouts', // "http://book-json.herokuconfig.com/books"
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
    url: config.apiOrigin + '/workouts/' + id, // "http://book-json.herokuconfig.com/books"
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const updateWorkout = function (id, data) {
  return $.ajax({
    // config.apiOrigins
    url: config.apiOrigin + '/workouts/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
// const getWorkout = function () {
//   return $.ajax({
//     url: config.apiOrigins + '/workouts', // "http://book-json.herokuconfig.com/books"
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
module.exports = {
  getWorkouts,
  createWorkouts,
  deleteWorkout,
  updateWorkout
}
