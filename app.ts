import { Application, Context, organ } from "./deps";
import { APP_HOST, APP_PORT } from "./config/env";

// import router from "./routes/User.route.ts";
import userRouter from "./routes/User.route";
import notFound from "./error/404";

const app = new Application();

// // Adding the Organ middleware. Note that when no values are passed to the
// // organ function, the default format "combined" will be used. For more info
// // on this format, see the section on predefined formats below.
app.use(organ("dev"));

//Set all routes from routes folder
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

// async (ctx: Context, next: () => Promise<any>) => {
//   ctx.response.body = "hello woarld";
// }
app.use(notFound);

console.log(`Server is started at ${APP_HOST}`);
console.log(`Listening on ${APP_PORT}...`);

await app.listen(`${APP_HOST}:${APP_PORT}`);
// await app.listen({ port: APP_PORT });
