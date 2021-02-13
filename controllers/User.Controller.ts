import userDB from "../model/User.model.ts";
import validation from "../libs/validation.ts";

export default {
  async index(ctx: any) {
    const data = await userDB.find();
    ctx.response.body = data;
    // const user = { name: "Andres", email: "hello@tech-andgar.me" };
    // ctx.response.body = user;
  },
  async show(ctx: any) {
    const data = await userDB.findOne(
      { _id: { $oid: ctx.params.id } },
    );
    ctx.response.body = data;
    // ctx.response.body = ctx.params.id;
  },
  async store(ctx: any) {
    if (!ctx.request.hasBody) {
      ctx.response.status = 400;
      ctx.response.body = { error: "Please provide the required data" };
      return;
    }

    const { value } = await ctx.request.body();

    if (!value.email) {
      ctx.response.status = 422;
      ctx.response.body = { error: "Email filed is required" };
      return;
    }

    // const insertId = await userDB.insertOne(
    //   {
    //     name: value.name,
    //     email: value.email,
    //     password: value.password
    //   }
    // );
    const insertId = await userDB.insertOne(value);
    ctx.response.status = 201;
    ctx.response.body = insertId;
  },
  async update(ctx: any) {
    const data = validation.validate(ctx);

    await userDB.updateOne(
      { _id: { $oid: ctx.params.id } },
      { $set: data },
    );
    ctx.response.status = 200;
    ctx.response.body = { message: "Updated" };
  },
  async destroy(ctx: any) {
    await userDB.deleteOne({ _id: { $oid: ctx.params.id } });

    ctx.response.status = 204;
  },
};
