const mongoose = require('mongoose');

var RatingSchema = mongoose.Schema({
    rating: {type: Number, required: true, minimum: 1, maximum: 5},
    comment: {type: String, required: false}
});
var CakeSchema = new mongoose.Schema({
    name: { type: String, required: true},
    image: {type: String, required: true},
    rating: [RatingSchema]
}, {timestamp:true});

module.exports = mongoose.model('Cake', CakeSchema); 
var Cake = mongoose.model('Cake');