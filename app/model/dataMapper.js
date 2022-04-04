const { query } = require("express");
const APIError = require("../service/APIError");
const client = require("./dataClient");
const debug = require("debug")("Datamapper");

const dataMapper = {
    async getMovies() {
        const results = await client.query("Select * from movie");
        return results.rows;
    },

    async addMovie(movieName) {
        // 1. je vérifie que le film n'est pas déjà en BDD
        const result = await client.query("SELECT COUNT(name) FROM MOVIE WHERE name=$1", [movieName]);
        if (result.rowCount > 0) {
            // 1-2. s'il est en BDD je déclenche une erreur
            throw new APIError("Film déjà présent");
        }
        else {
            // 1-3. sinon je l'insère
            await client.query("INSERT INTO movie (name) VALUES ($1)", [movieName]);
        }
    }
};

module.exports = dataMapper;