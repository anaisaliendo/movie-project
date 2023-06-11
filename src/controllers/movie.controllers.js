const catchError = require('../utils/catchError');
const Movie = require('../models/Movie');


const getAll = catchError(async(req, res) => {
    const movies = await Movie.findAll();
    return res.json(movies)
});

const create = catchError(async(req, res) => {
    const createMovie = await Movie.create(req.body);
    return res.status(201).json(createMovie);
});

const getOneMovie = catchError(async(req, res) =>{
    const { id } = req.params;
    const movie = await Movie.findByPk(id);
    if(!movie) return res.sendStatus(404).json("Movie not found, try again!");
    return res.json(movie)
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const removeMovie = await Movie.destroy({where: {id}});
    if(!removeMovie) return res.sendStatus(404).json("Movie not found");
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const updateMovie = await Movie.update(req.body, {where: {id}, returning: true});
    if(updateMovie[0] === 0) return res.sendStatus(404).json("Movie not found");
    return res.json(updateMovie[1][0]);
})


module.exports = {
    getAll,
    create,
    getOneMovie,
    remove,
    update,
}