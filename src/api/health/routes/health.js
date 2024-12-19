module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/health',
        handler: 'health.index',
        config: {
          auth: false, // Disable authentication for this route
        },
      },
    ],
  };
  