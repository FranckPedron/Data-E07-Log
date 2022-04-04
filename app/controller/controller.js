const dataMapper = require("../model/dataMapper");

const controller = {
    async get(req,res,next){
        const results = await dataMapper.getMovies();
        res.send(results);
    },

    async post(req,res,next){
        const result = await dataMapper.addMovie(req.body.name);
        res.send(result);
    },

    ping(){
        res.send(true);
    }
};

module.exports = controller;