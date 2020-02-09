
(function(exports) {
  function Article(headline, id, url) {
    this.headline = headline
    this.id = id
    this.url = url
  }


  Article.prototype.viewHeadline = function() {
    return (this.headline)
  }

  Article.prototype.viewId = function() {
    return (this.id)
  }

  Article.prototype.viewUrl = function() {
    return (this.url)
  }



  exports.Article = Article
})(this);