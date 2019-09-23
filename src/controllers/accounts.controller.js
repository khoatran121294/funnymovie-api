import { Account } from "../models/accounts";
import { appError } from "../errors/app.error";
import { HTTP_STATUS_CODE } from "../app.constant";

var jwt = require("jsonwebtoken");
var bcryptjs = require("bcryptjs");

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  const account = await Account.findOne({
    where: {
      email
    }
  });
  if (!account) throw appError("Email is not existed", HTTP_STATUS_CODE.BAD_REQUEST);
  var passwordIsValid = bcryptjs.compareSync(
    password,
    account.password
  );
  if (!passwordIsValid) throw appError("Password is invalid", HTTP_STATUS_CODE.BAD_REQUEST);
  const userInfo = {
    id: account.id,
    email: account.email
  };
  const token = jwt.sign(
    userInfo,
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN
    }
  );
  res.send({ token, userInfo });
};

export const register = async (req, res, next) => {
  const { email, password } = req.body;
  const account = await Account.findOne({
    where: {
      email
    }
  });
  if (account) throw appError("Account is existed", HTTP_STATUS_CODE.BAD_REQUEST);

  const salt_key = await bcryptjs.genSaltSync(10);
  const pass_hash = await bcryptjs.hashSync(password, salt_key);

  const newAccount = await Account.create({
    email,
    password: pass_hash
  });
  return res.json(newAccount.id);
};