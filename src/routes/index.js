const loginRouter = require('./login')
const registerRouter = require('./register')
const meRouter = require('./me')
const coursesRouter = require('./courses')
const siteRouter = require('./site')


function route(app) {

  app.use('/login', loginRouter); 
  app.use('/register', registerRouter);
  app.use('/me', meRouter);
  app.use('/courses', coursesRouter);
  app.use('/', siteRouter);
}

module.exports = route;