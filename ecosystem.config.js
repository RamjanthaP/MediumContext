module.exports = {
  apps: [
    {
      name: 'amaceitwebstage01',
      script: 'server.js',
      watch: false,
      autorestart: true,
      env: {
        NODE_ENV: 'production',
        PORT: process.env.PORT || 3000,
        STORYBLOK_API_TOKEN: 'LajGNuE5cdMZfhpS6PhVoQtt', // TODO: change to production token
      },
    },
  ],
};
