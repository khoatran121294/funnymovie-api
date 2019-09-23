import { catchAsyncErrors } from "../errors/catch-async-error";
import * as MovieController from "../controllers/movies.controller";
import { requireAuthentication } from "../middlewares/require-authentication";

export const movieRouter = router => {
  router
    .route("/movies")
    .get(catchAsyncErrors(MovieController.getMovies));
  router
    .route("/movies")
    .post(requireAuthentication, catchAsyncErrors(MovieController.addMovie));
};
