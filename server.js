const serverless = require('serverless-http');
const express = require('express');
const routesAPI = require('./src/api/index');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routesAPI(app);
app.get('/', (req, res, next) => {
  return res.status(200).json({
    message: 'Hello from root!',
  });
});

app.get('/hello', (req, res, next) => {
  return res.status(200).json({
    message: 'Hello from path!',
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: 'Not Found',
  });
});

module.exports.api = serverless(app);
