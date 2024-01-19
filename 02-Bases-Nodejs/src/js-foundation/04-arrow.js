const users = [
  {
    id: 1,
    name: 'Jonh Doe'
  },
  {
    id: 2,
    name: 'Jane Doe'
  }
]


const getUserById = ( id, callback ) => {
  const user = users.find( user  => user.id === id )


  ( user ) 
    ? callback( null, user )
    : callback(`USUARIO NO ENCONTRADO ${id}`)

}

module.exports = {
  getUserById,
}



