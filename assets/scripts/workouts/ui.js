'use strict'

const showWorkoutsTemplate = require('../templates/workout-listing.handlebars')

// const events = require('../app.js')
// const hideButton = () => {
//   const id = $(this).attr("data-id")
//   console.log('i got clicked')
//   console.log(id)
// }
//
// const getBooksSuccess = (data) => {
//   console.log(data);
//   let showBooksHtml = showBooksTemplate({ workouts: data.workouts });
//   $('.content').append(showBooksHtml);
//   $('.btn').on('click', hideButton)
// };
// const hideWorkout = function () {
//   if (confirm('Are you sure you want to hide this?')) {
//     const id = $(this).attr('data-id')
//     console.log('i clicked', id)
//     $('.workout' + id).hide()
//   } else {
//     alert('ok sucker!')
//   }
// }
const getWorkoutsSuccess = (data) => {
  const showWorkoutsHtml = showWorkoutsTemplate({
    workouts: data.workouts
  })
  $('.workoutInfo').html(showWorkoutsHtml)
  $('.showWorkoutForm').css('display', 'block')
  const array = data.workouts
  addWorkouts(array)
  console.log(array)
}
const addWorkouts = function (data) {
  console.log(data)
  let shupTotal = 0
  let squatTotal = 0
  let burpeeTotal = 0
  let shupMax = 0
  let squatMax = 0
  let burpeeMax = 0
  for (let i = 0; i < data.length; i++) {
    console.log(data[i])
// pushups
    shupTotal += data[i].shups
    squatTotal += data[i].squats
    burpeeTotal += data[i].burpees
    if (shupMax < data[i].shups) {
      shupMax = data[i].shups
    }
    if (squatMax < data[i].squats) {
      squatMax = data[i].squats
    }
    if (burpeeMax < data[i].burpees) {
      burpeeMax = data[i].burpees
    }
    $('#workoutStats').css('display', 'block')
    $('#shupStats').text('Total shups:' + shupTotal + ' Your all time max: ' + shupMax)
    $('#squatStats').text('Total squats:' + squatTotal + ' Your all time max: ' + squatMax)
    $('#burpeeStats').text('Total burpees:' + burpeeTotal + ' Your all time max: ' + burpeeMax)
    // console.log('total shups = ', shupTotal)
    // console.log('max shups= ', shupMax)
    // console.log('total squats = ', squatTotal)
    // console.log('max squats= ', squatMax)
    // console.log('total burpees = ', burpeeTotal)
    // console.log('max burpees= ', burpeeMax)
  }
}
const clearWorkouts = () => {
  $('.showWorkoutForm').css('display', 'none')
  $('#bicep').css('display', 'none')
  $('#workoutStats').css('display', 'none')
}
const createWorkoutsSuccess = (data) => {
  $('#workoutForm').trigger('reset')
  $('#bicep').css('display', 'block')
}
const deleteWorkoutsSuccess = (data) => {
  console.log('clearing single workout')
}
const updateWorkoutsSuccess = (data) => {
  console.log('updating single workout success')
}
const failure = (error) => {
  console.error(error)
}

module.exports = {
  getWorkoutsSuccess,
  clearWorkouts,
  createWorkoutsSuccess,
  failure,
  deleteWorkoutsSuccess,
  updateWorkoutsSuccess,
  addWorkouts
}
