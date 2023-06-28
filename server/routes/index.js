const loginRoute = require('./loginRoutes');
const registerRoute = require('./registerRoutes');
const logoutRoute = require('./logout');
const postApiRoutes=require('./api/posts')
const mockRoutes = require('./mockRoutes');


module.exports= (app)=>{
    app.use('/login',loginRoute)
    app.use('/register',registerRoute)
    app.use('/logout',logoutRoute)

    //api routes
    app.use('/api/posts',postApiRoutes)
    app.use('/api/mock',mockRoutes)
}
