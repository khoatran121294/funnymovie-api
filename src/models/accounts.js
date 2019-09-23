import Sequelize from "sequelize";
import { sequelize } from "./sequelize";

export const Account = sequelize.define("accounts", {
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
  updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
  deletedAt: { type: Sequelize.DATE }
});
