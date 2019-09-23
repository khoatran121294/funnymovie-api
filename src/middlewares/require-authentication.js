var jwt = require("jsonwebtoken");
import { appError } from "../errors/app.error";

export const requireAuthentication = async (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) return res.status(401).send({ error: "token required" });
  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).send({ error: "invalid token" });
  }
};
