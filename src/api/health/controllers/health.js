module.exports = {
    async index(ctx) {
      ctx.body = {
        status: 'ok',
        message: 'Health check passed',
      };
    },
  };
  