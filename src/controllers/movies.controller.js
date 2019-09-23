import { Movie } from "../models/movies";

export const getMovies = async (req, res, next) => {
  const movies = await Movie.findAll();
  return res.json(movies);
};

export const addMovie = async (req, res, next) => {
  const { title, linkUrl, description } = req.body;
  const newMovie = await Movie.create({
    title,
    linkUrl, 
    description,
    createdBy: req.account.email
  });
  return res.json(newMovie);
};
