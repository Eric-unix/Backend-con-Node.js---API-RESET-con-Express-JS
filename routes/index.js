const productsRouter = require('./products.router');
//const usersrouter = require('./users.router')

function routerApi(app){
  app.use('/products', productsRouter);
  //app.use('/users',productsRouter);
  //app.use('categories', productsRouter);
}

module.exports = routerApi;
