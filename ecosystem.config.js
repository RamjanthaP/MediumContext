// Using this as referece for deploy: https://itbusinesshub.com/blog/nextjs-node-app-on-azure-app-service/
module.exports = {
  apps: [
    {
      name: 'amaceit-website',
      script: './node_modules/.bin/next',
      args: 'start -p ' + (process.env.PORT || 3000),
      watch: false,
      autorestart: true,
    },
  ],
};
