const { buildLogger } = require('./plugins')


const logger = buildLogger('app.js')

logger.log('Hola mundo')

/* 

const { buildMakePerson } = require('./js-foundation/05-factory') */

/* const makePerson = buildMakePerson({ getUUID, getAge })

const obj = { name: 'Jonh', birthDate: '2003-06-30' }

const john = makePerson(obj)

console.log(john) */

/* const getPokemonById = require('./js-foundation/06-promises')

getPokemonById(4)
.then( pokemon => console.log({pokemon}))
.catch( err => console.log('Por favor intente de nuevo'))
.finally( () => console.log('Finalmente'))

 */

