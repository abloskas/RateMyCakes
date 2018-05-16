const mongoose = require('mongoose');
var Cake = require('../models/cake');

function buildQueryHandler(res) {
    return function(err, result) {
        if(err) {
            res.json({
                message: "Error",
                error: err
            });
        }
        else {
            res.json({
                message: "Success",
                data: result
            });
        }
    }
}

module.exports = {
    index: function(req, res) {
        Cake.find({}, buildQueryHandler(res));
    },

    create: function(req, res) {
        Cake.create(req.body, buildQueryHandler(res));
    },

    rate: function(req, res) {
        Cake.findById(req.params.id, function(err, cake){
            if(err) {
                res.json({message: "Error", error: err});
            }
            else {
                cake.rating.push(req.body);
                cake.save(buildQueryHandler(res));
            }
        });
    },

    show: function(req, res) {
        Cake.findById(req.params.id, buildQueryHandler(res));
    }

}
