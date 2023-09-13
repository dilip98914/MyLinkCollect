const homeRoutes = require('./home')
const userRoutes = require('./user')
const collectionRoutes = require('./collection')

module.exports = (app) => {
  app.use(`/user`, userRoutes)
  app.use(`/collection`, collectionRoutes)
  app.use(`/`, homeRoutes)
}
