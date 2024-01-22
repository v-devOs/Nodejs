
// Todos nuestros tipos de peticiones pasaran por aqui
const httpClientPlugin = {
  get: async( url ) => {
    const response = await fetch(url)
    return await response.json()
  },

  post: async(url, body ) => {}


}

module.exports = {
  httpClientPlugin
}