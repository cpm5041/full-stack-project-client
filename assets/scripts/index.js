'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
const workoutEvents = require('./workouts/events.js')
const workoutLogic = require('./workoutLogic.js')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
$(() => {
  authEvents.addHandlers()
  workoutEvents.addHandlers()
  workoutLogic.initializePage()
  // cahnge board actions to where i define the method
  // $(document).on('click', '.deleteButton', workoutEvents.onClearSingleWorkout)
})
