const API_VERSION = 'api/v1'
const homeRoutes = require('./home')
const userRoutes = require('./user')

module.exports = (app) => {
  app.use(`/user`, userRoutes)
  app.use(`/`, homeRoutes)

}
