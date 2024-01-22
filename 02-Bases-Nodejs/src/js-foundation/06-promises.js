const { httpClientPlugin: http } = require('../plugins')

const getPokemonByid = async( id ) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${ id }`

  const pokemon = await http.get( url )

  return pokemon.name

  /* return fetch( url )
    .then( resp => resp.json())
    .then( () => { throw new Error('Pokemon no existe')})
    .then( pokemon => pokemon.name ) */
    
}

module.exports = getPokemonByid