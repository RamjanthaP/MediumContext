// Using this as referece for deploy: https://itbusinesshub.com/blog/nextjs-node-app-on-azure-app-service/
module.exports = {
  apps: [
    {
      name: 'amaceitwebstage01',
      script: 'node',
      args: 'start',
      watch: false,
      autorestart: true,
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        STORYBLOK_API_TOKEN: 'LajGNuE5cdMZfhpS6PhVoQtt',
      },
    },
  ],
};
