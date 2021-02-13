// const server = new Application();

// // server.get('/', function (req, res) {
//   //   res.redirect('/home');
//   // });

//   server.use('/user', userRouter);
//   // server.use('/api', apiRoute);
// // server.use('/home', homeRoute);
// // server.use('/error', errorRoute);

// export default server;

// const express = require("express");
// const rootRoutes = require('./root');
// const accountRoutes = require('./account.js');
// const router = express.Router();
// router.use("/", rootRoutes);
// router.use("/account", accountRoutes);
// module.exports = router;

/* import { Router, Request, Response } from "express";
import auth from "./auth";
import user from "./user";

const routes = Router();

routes.use("/auth", auth);
routes.use("/user", user);

export default routes; */

import { Router } from "../deps.ts";
import userRoutes from "./User.route.ts";
const routes = new Router();
routes.use(userRoutes);

// export default routes;
