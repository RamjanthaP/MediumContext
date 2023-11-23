require('dotenv').config();

module.exports = {
  apps: [
    {
      name: 'amaceitwebstage01',
      script: 'server.js',
      watch: false,
      autorestart: true,
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        STORYBLOK_API_TOKEN: process.env.STORYBLOK_API_TOKEN,
      },
    },
  ],
};
