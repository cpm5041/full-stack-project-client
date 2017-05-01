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
  const array = data
  console.log(array)

  // function arrSum (array) {
  //   let sum = 0
  //   // iterate array using forEach, better to use for loop since it have higher performance
  //   array.forEach(function (v) {
  //     // checking array element is an array
  //     if (typeof v === 'object') {
  //       // if array then getting sum it's element (recursion)
  //       sum += arrSum(v)
  //     } else {
  //       // else adding the value with sum
  //       sum += v
  //     }
  //   })
  //   // returning the result
  //   return sum
  // }
  // console.log(arrSum(array))
}
const clearWorkouts = () => {
  $('.showWorkoutForm').css('display', 'none')
  $('#bicep').css('display', 'none')
}
const createWorkoutsSuccess = (data) => {
  $('#workoutForm').trigger('reset')
  $('#bicep').css('display', 'block')
  console.log('create success', data)
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
  updateWorkoutsSuccess
}
