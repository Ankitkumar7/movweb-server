const moongose = require('mongoose')
const movieSchema = moongose.Schema({
    "title" : {
        type: String,
    },
    "download_id": {
        type: String
    },
    "total_download": {
        type: Number
    }
  
})

module.exports = moongose.model('movie', movieSchema, 'movie');