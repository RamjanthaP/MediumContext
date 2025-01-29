const https = require('https');

const options = {
  hostname: process.env.APP_HOSTNAME,
  port: 443,
  path: '/',
  method: 'GET',
};

const req = https.request(options, (res) => {

  if (res.statusCode === 200) {
    process.exit(0);
  } else {
    console.error('Smoke test failed: Unexpected status code');
    process.exit(1);
  }
});

req.on('error', (error) => {
  console.error('Smoke test failed:', error);
  process.exit(1);
});

req.end();
