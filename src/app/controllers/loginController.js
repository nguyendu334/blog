class loginController {
  index(req, res) {
    res.render('../../resources/views/login/login.hbs');
  }
}
module.exports = new loginController;

