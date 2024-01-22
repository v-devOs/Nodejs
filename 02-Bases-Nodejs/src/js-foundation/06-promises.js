const getPokemonByid = ( id ) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${ id }`

  return fetch( url )
    .then( resp => resp.json())
    .then( () => { throw new Error('Pokemon no existe')})
    .then( pokemon => pokemon.name )
    
}


module.exports = getPokemonByid