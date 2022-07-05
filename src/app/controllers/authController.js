class authController {
  login(req, res) {
    res.render('../../resources/views/login/login.hbs');
  }

  register(req, res) {
    res.render('../../resources/views/login/register.hbs');
  }

}
module.exports = new authController;

