import { Context, Response } from "../deps.ts";

export default (ctx: Context) => {
  ctx.response.status = 404
  ctx.response.body = {
    error: "Not Found"
  }
};
// export default ({res}: {res:Response} )=>{
//   res.status = 404
//   res.body = {
//     error : "Not Found"
//   }
// };
