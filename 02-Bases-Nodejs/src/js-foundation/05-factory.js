
// Funcion que crea una funcion

const { getAge, getUUID } = require('../plugins')

const obj = { name: 'Jonh', birthDate: '2003-06-30' }

const buildPerson = ({ name, birthDate }) => {
  return {
    id: getUUID(),
    name,
    birthDate,
    age: getAge(birthDate)
  }
}

const john = buildPerson( obj )

console.log(john)