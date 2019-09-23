
import { accountRouter } from "./accounts.route";
import { movieRouter } from "./movies.route";

module.exports = router => {
  accountRouter(router);
  movieRouter(router);
};
