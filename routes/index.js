const homeRoutes = require('./home')
const userRoutes = require('./user')
const collectionRoutes = require('./link_collection')

module.exports = (app) => {
  app.use(`/user`, userRoutes)
  app.use(`/collection`, collectionRoutes)
  app.use(`/`, homeRoutes)
}
