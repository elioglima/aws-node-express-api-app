const express = require('express');
const path = '/users';
const routes = express.Router({
  mergeParams: true,
});

routes.get(`${path}/`, (req, res) => {
  console.log('console.log api users');
  res.status(200).json({ success: true });
});

module.exports = routes;
