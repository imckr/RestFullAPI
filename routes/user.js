const express = require("express");
const {
  handleGetUsers,
  handleGetUserById,
  handleUpdateById,
  handleDeleteById,
  handlePostUser,
} = require("../controllers/user");

const routes = express.Router();

routes.route("/").get(handleGetUsers).post(handlePostUser);

routes
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateById)
  .delete(handleDeleteById);

module.exports = routes;
