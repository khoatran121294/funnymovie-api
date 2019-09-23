import { Movie } from "../models/movies";
import { movies as dummyMovies } from "../../dummy-data/movies";

export const getMovies = async (req, res, next) => {
  const movies = await Movie.findAll();
  return res.json(movies);
};

export const addMovie = async (req, res, next) => {
  const { title, linkUrl, description } = req.body;
  // youtube refuses direct link, so I will replace the link
  const _linkUrl = linkUrl.replace("watch?v=", "embed/");
  console.log("_linkUrl", _linkUrl);
  const newMovie = await Movie.create({
    title,
    linkUrl: _linkUrl, 
    description,
    createdBy: req.account.email
  });
  return res.json(newMovie);
};
