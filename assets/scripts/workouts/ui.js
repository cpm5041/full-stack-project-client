'use strict'

const showWorkoutsTemplate = require('../templates/workout-listing.handlebars')

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
const hideWorkout = function () {
  if (confirm('Are you sure you want to hide this?')) {
    const id = $(this).attr('data-id')
    console.log('i clicked', id)
    $('.workout' + id).hide()
  } else {
    alert('ok sucker!')
  }
}
const getWorkoutsSuccess = (data) => {
  console.log(data)
  const showWorkoutsHtml = showWorkoutsTemplate({
    workouts: data.workouts
  })
  $('.content').html(showWorkoutsHtml)
  $('.btn').on('click', hideWorkout)
}
const clearWorkouts = () => {
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  getWorkoutsSuccess,
  clearWorkouts,
  failure
}
