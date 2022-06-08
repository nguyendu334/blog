const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose')

class meController {
  storedCourses(req, res, next) {

    Promise.all([Course.find({}).sortable(req), Course.countDocumentsDeleted()])
      .then(([courses, deletedCount]) => 
        res.render('me/stored-courses', {
          deletedCount,
          courses: mutipleMongooseToObject(courses)
        })
      )
      .catch(next)
   
  }

  trashCourses(req, res, next){
    Course.findDeleted({})
      .then((courses) =>  res.render('me/trash-courses', {
        courses: mutipleMongooseToObject(courses)
      }),
      )
      .catch(next)
  }
}
module.exports = new meController;

