const userModel = require('../models/user');

class authController {
  login(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    userModel.findOne({ username: username, password: password})
      .then(data => {
        if (data) {
          res.redirect('/')
        }
        else {
          res.redirect('back')
        }
      })
      .catch(err => {
        res.status(500).json("Lỗi")
      })
  }
 
  register(req, res) {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    userModel.findOne({ email: email })
      .then(data => {
        if (data) {
          res.json("Email đã tồn tại")
        }
        else {
          return userModel.create({
            email: email,
            username: username,
            password: password 
          })
        }
      })
      .then(data => {
        res.redirect('/auth/login')
      })
      .catch(err => {
        res.status(500).json("Tạo tài khoản thất bại")
      })
 
  }
} 
module.exports = new authController;

