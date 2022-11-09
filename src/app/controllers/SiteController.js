const Course = require("../models/Course");
const { mutipleMongooseToObject } = require("../../util/mongoose");

class SiteController {
    //GET /home
    index(req, res, next) {
        // res.render('home');
       Course.find({}) 
       .then(courses => {
            res.render('home', { 
                courses: mutipleMongooseToObject(courses)
             });
       }) //chọc vào database, render home
       .catch(error => next(error));
    }

    //GET /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
