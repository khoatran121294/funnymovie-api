var jwt = require("jsonwebtoken");
import { HTTP_STATUS_CODE } from "../app.constant";

export const requireAuthentication = async (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) return res.status(HTTP_STATUS_CODE.UNAUTHORIZED).send({ error: "token required" });
  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    req.account = decoded;
    next();
  } catch (err) {
    res.status(401).send({ error: "invalid token" });
  }
};
