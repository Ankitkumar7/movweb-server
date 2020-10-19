const express = require('express');
const router = express.Router();
const movieSchema = require('./models/movie_schema')
router.get('/all', (req, res, next) => {

    movieSchema.find().exec().then(data => {
        res.status(200).json({
            movies: data
        })
    })
    // let skip = (parseInt(req.query.pageNo) - 1) * parseInt(req.query.limit);
    // .skip(skip).limit(parseInt(req.query.limit))
    // let toQuery = {userName: req.query.userName, password: req.query.password, status: 'active'}
    // userModel.findOne(toQuery)
    // .exec()
    // .then(data => {
    //     if(data) {
    //         res.status(200).json({
    //             data: data
    //         })
    //     } else {
    //         res.status(200).json({
    //             data: 'user not found'
    //         })
    //     }
    // })
    // .catch(err => {
    //     console.log(err)
    //     res.status(500).json({err: 'Something Went Wrong'});
    // })
})


module.exports = router;