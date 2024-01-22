const getAgePlugin = require('get-age')

// Patron adaptador

const getAge = ( birthDate ) => {
  if(!birthDate ) return new Error('Birthdate is required')

  return getAgePlugin(birthDate)
} 

module.exports = {
  getAge,
}