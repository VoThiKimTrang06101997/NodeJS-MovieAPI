const express = require("express");
const { userRouter } = require("./user.router");
const rootRouter = express.Router();

//userRouter:   Quan Ly Nguoi Dung
rootRouter.use("/users", userRouter);

module.exports = {
  rootRouter,
};
