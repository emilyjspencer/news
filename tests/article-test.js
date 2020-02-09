
(function ArticleHasHeadlineAndId() {
  var article = new Article("Storm Ciara - on the move")
  assert.isTrue(article.viewHeadline() === "Storm Ciara - on the move");
  assert.isTrue(article.id === 0)
})();