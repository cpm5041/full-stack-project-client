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
  // $('.btn').on('click', events.onClearSingleWorkout)
  // console.log('clear single workout')
  $('.showWorkoutForm').css('display', 'block')
}
const clearWorkouts = () => {
  $('.showWorkoutForm').css('display', 'none')
}
const createWorkoutsSuccess = (data) => {
  $('#workoutForm').trigger('reset')
  console.log('create success', data)
}
const deleteWorkoutsSuccess = (data) => {
  console.log('clearing single workout')
  // $('.showWorkoutForm').find('li[data-id=' + data.id + ']').hide()
  // $(this).hide()
}
const failure = (error) => {
  console.error(error)
}

module.exports = {
  getWorkoutsSuccess,
  clearWorkouts,
  createWorkoutsSuccess,
  failure,
  deleteWorkoutsSuccess
}
