
(function ArticleViewReturnsListAsHTML() {
  var article = new Article("Storm Ciara", 1)
  var articleView = new ArticleView(articleList)
  assert.isTrue(articleView.createString() === "<ul><li><div><a>Storm Ciara</a></div></li></ul>")
})();