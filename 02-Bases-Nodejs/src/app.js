// const { emailTemplate } = require('./js-foundation/01-template.js')
// require('./js-foundation/02-destructuring.js')

// console.log( emailTemplate )

const { getUserById } = require('./js-foundation/04-arrow.js')

const id = 1

getUserById( id, ( error, user ) => {
  if(error){
    throw new Error('User not found with id', id)
  }

  console.log(user)
})