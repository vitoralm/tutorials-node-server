const consign = require('consign');
const express  = require('express');

const application = express();
application.set('view engine', 'ejs');
application.set('views', './src/views');

consign() 
  .include('src/routes')
  .then('src/models')
  .then('src/controllers')
  .into(application);

application.listen(3000, function () {
  console.log('application rodando na porta 3000');
});
