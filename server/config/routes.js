var mongoose = require('mongoose');
const cakes = require('../controllers/cakes');

module.exports = function(app){
    app.get("/cakes", cakes.index);
    app.get("/cakes/:id", cakes.show);
    app.post("/cakes", cakes.create);
    app.post("/cakes/:id/rate", cakes.rate);
}