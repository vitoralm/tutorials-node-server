module.exports.index = function (application, req, res) {
  var newModels = new application.src.models.news();

  newModels.getLastNews(function (err, result) {
      res.render("news/index", {news : result});
  });
}
