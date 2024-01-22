/* const { getAge, getUUID } = require('./plugins')

const { buildMakePerson } = require('./js-foundation/05-factory') */

/* const makePerson = buildMakePerson({ getUUID, getAge })

const obj = { name: 'Jonh', birthDate: '2003-06-30' }

const john = makePerson(obj)

console.log(john) */

const getPokemonById = require('./js-foundation/06-promises')

getPokemonById(4, ( pokemon ) => {
  console.log({ pokemon }) 
})


