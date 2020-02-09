
(function(exports) {
  function Article(headline) {
    this.headline = headline
  }

  Article.prototype.addArticle = function(headline) {
    this.headline = headline
  }

  Article.prototype.viewHeadline = function() {
    return (this.headline)
  }

  exports.Article = Article
})(this);