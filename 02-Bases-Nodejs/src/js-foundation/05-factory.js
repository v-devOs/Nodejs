
// Funcion que crea una funcion

const obj = {
  name: 'Jonh', birthDate: '2003-06-30'
}

const buildPerson = ({ name, birthDate }) => {
  return {
    id: new Date().getTime(),
    name,
    birthDate,
    age: new Date().getFullYear() - new Date(birthDate).getFullYear()
  }
}


const john = buildPerson( obj )

console.log(john)