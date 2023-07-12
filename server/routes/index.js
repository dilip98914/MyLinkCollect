const API_VERSION = 'api/v1'

const profileRoutes = require('./profile')
const userRoutes = require('./user')
const projectRoutes = require('./project')
const { authenticateSession } = require('../middlewares/auth')


module.exports = (app) => {
  app.use(`/${API_VERSION}/profile`, authenticateSession, profileRoutes)
  app.use(`/${API_VERSION}/user`, userRoutes)
  app.use(`/${API_VERSION}/project`, authenticateSession, projectRoutes)
}
