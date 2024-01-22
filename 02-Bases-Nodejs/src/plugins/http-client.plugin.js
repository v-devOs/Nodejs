
const axios = require('axios')
// Todos nuestros tipos de peticiones pasaran por aqui
const httpClientPlugin = {
  get: async( url ) => {
    /* const response = await fetch(url)
    return await response.json() */

    const { data } = await axios.get(url)
    return data
  },

  post: async(url, body ) => {}
}

module.exports = {
  httpClientPlugin
}