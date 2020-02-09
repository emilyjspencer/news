
(function ArticleHasHeadline() {
  var article = new Article()
  article.addArticle("Storm Ciara - on the move")
  assert.isTrue(article.viewHeadline() === "Storm Ciara - on the move");
})();