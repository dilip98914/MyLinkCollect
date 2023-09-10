const API_VERSION = 'api/v1'
const staticRoutes = require('./static')
const { authenticateSession } = require('../middlewares/auth')

module.exports = (app) => {
  app.use(`/`, staticRoutes)
}
