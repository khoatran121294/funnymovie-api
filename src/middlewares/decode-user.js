var jwt = require("jsonwebtoken");
import { appError } from "../errors/app.error";

export const decodeUser = async (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (token) {
    try {
      const decoded = await jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
    } catch (err) {}
  }
  next();
};
