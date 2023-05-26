const express = require('express');

const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
//const categoriesRouter = require('./categories.router');

function routerApi(app){
  const router = express.Router();
  router.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/users',productsRouter);
  //app.use('categories', productsRouter);
}

module.exports = routerApi;
