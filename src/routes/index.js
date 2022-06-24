const authRouter = require('./auth')
const meRouter = require('./me')
const coursesRouter = require('./courses')
const siteRouter = require('./site')


function route(app) {

  app.use('/auth', authRouter); 
  app.use('/me', meRouter);
  app.use('/courses', coursesRouter);
  app.use('/', siteRouter);
}

module.exports = route;