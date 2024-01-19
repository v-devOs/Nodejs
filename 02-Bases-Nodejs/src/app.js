// const { emailTemplate } = require('./js-foundation/01-template.js')
// require('./js-foundation/02-destructuring.js')

// console.log( emailTemplate )

const { getUserById } = require('./js-foundation/03-callbacks.js')

const id = 3

getUserById(id, function( error, user ){
  if(error){
    throw new Error('User not found with id', id)
  }

  console.log(user)
})