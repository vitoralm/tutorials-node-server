module.exports = function (app){
  app.get('/', function (req, res) {
    app.src.controllers.news.index(app, req, res);
  });
}