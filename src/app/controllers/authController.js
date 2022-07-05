class authController {
  login(req, res) {
    res.render('login/login');
  }

  register(req, res) {
    res.render('login/register');
  }

}
module.exports = new authController;

