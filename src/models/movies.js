import Sequelize from "sequelize";
import { sequelize } from "./sequelize";

export const Movie = sequelize.define("movies", {
  title: Sequelize.STRING,
  linkUrl: Sequelize.STRING,
  description: Sequelize.STRING,
  createdBy: Sequelize.STRING,
  updatedBy: Sequelize.STRING,
  deletedBy: Sequelize.STRING,
  createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
  updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
  deletedAt: { type: Sequelize.DATE }
});
