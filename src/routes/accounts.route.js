import { catchAsyncErrors } from "../errors/catch-async-error";
import * as AccountController from "../controllers/accounts.controller";

export const accountRouter = router => {
  router
    .route("/login")
    .post(catchAsyncErrors(AccountController.login));
  router
    .route("/register")
    .post(catchAsyncErrors(AccountController.register));
};
