

(function(exports) {
  function ArticleList() {
    this.articles = []
    this.idCount = 0
  }

  ArticleList.prototype.addArticle = function(headline, id, url) {
    //var id = this.articles.length
    //var article = new Article(headline, id, url)
    //this.articles.push(article)
    //return article;
    this.articles.push(new Article(headline = headline, id = this.idCount, url = url));
    this.idCount++
  }

 

  exports.ArticleList = ArticleList;
})(this)