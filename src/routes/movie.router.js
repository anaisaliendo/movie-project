const { getAll, create, remove, update, getOneMovie} = require('../controllers/movie.controllers');
const express = require('express');

const routerMovie = express.Router();

routerMovie.route('/')
    .get(getAll)
    .post(create);

routerMovie.route('/:id')
    .get(getOneMovie)
    .delete(remove)
    .put(update);

routerMovie.route('/:id')
    .get(getOneMovie)
    .delete(remove)
    .put(update);
    


module.exports = routerMovie;