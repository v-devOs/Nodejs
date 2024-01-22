const getPokemonByid = async( id ) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${ id }`

  const response = await fetch(url)
  const pokemon = await response.json()

  return pokemon.name

  /* return fetch( url )
    .then( resp => resp.json())
    .then( () => { throw new Error('Pokemon no existe')})
    .then( pokemon => pokemon.name ) */
    
}


module.exports = getPokemonByid