const express = require('express');

const routes = express.Router({
  mergeParams: true,
});

routes.get('/', (req, res) => {
  console.log('console.log api');
  res.status(200).json({ success: true });
});

module.exports = {
  routes,
};
