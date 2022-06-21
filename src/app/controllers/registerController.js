class registerController {
    index(req, res) {
        res.render('../../resources/views/login/register.hbs');
    }
}
module.exports = new registerController;