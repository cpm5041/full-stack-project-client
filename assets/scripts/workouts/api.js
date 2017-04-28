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

module.exports = {
  getWorkouts
}
