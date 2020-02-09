(function(exports) {
  function ArticleView(articleList) {
    this.articleList = articleList
  }

  ArticleView.prototype.createString = function() {
    var HTMLstring = "<ul>"
    this.articleList.articles.forEach(function(item) {
      HTMLstring += "<li><div><a href='#" + item.id + "'>" + item.text.slice(0, 20) + "</a></div></li>"
    })
    HTMLstring += "</ul>"
    return HTMLstring
  }
  
  exports.ArticleView = ArticleView
})(this);