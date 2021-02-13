export default {
  async validate(ctx: any) {
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

    const data = { email: value.email };
  },
};
