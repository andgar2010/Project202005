import { Router, Context } from "../deps.ts";
const router = new Router();

// import UserController from "../controller/User.Controller.ts";
// import UserController from "../controllers/UserController";
// import { checkJwt } from "../middlewares/checkJwt";
// import { checkRole } from "../middlewares/checkRole";

router

  //Get all users
  .get(
    "/user",
    // [checkJwt, checkRole(["ADMIN"])],
    // UserController.listAll
    async (ctx: Context) => {
      const user = { name: "Andres", email: "hello@tech-andgar.me" };
      ctx.response.body = user;
    },
  )

  // Get one user
  .get(
    "user/:id([0-9]+)",
    // [checkJwt, checkRole(["ADMIN"])],
    // UserController.getOneById
    async (ctx: Context) => {
      // UserController.show
      const user = { name: "Andres", email: "hello@tech-andgar.me" };
      ctx.response.body = user;
    },
  )

  //Create a new user
  .post(
    "/user",
    // [checkJwt, checkRole(["ADMIN"])],
    // UserController.newUser
    async (ctx: Context) => {
      const { value } = await ctx.request.body();
      // UserController.store
      const user = {
        name: "Andres",
        email: "hello@tech-andgar.me",
      };

      ctx.response.status = 201;
      ctx.response.body = user;
    },
  )

  // Edit one user
  .patch(
    "/user/:id([0-9]+)",
    //   [checkJwt, checkRole(["ADMIN"])],
    //   UserController.editUser
    async (ctx: Context) => {
      // UserController.update
      const user = { name: "Andres", email: "hello@tech-andgar.me" };
      ctx.response.body = user;
    },
  )
  .put(
    "/user",
    //   [checkJwt, checkRole(["ADMIN"])],
    //   UserController.editUser
    async (ctx: Context) => {
      // UserController.update
      const user = { name: "Andres", email: "hello@tech-andgar.me" };
      ctx.response.body = user;
    },
  )

  // Delete one user
  .delete(
    "/user/:id([0-9]+)",
    //   [checkJwt, checkRole(["ADMIN"])],
    //   UserController.deleteUser
    async (ctx: Context) => {
      // UserController.destroy)
      const user = { name: "Andres", email: "hello@tech-andgar.me" };
      ctx.response.body = user;
    },
  );

export default router;
