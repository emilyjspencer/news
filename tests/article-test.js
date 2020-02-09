
(function ArticleHasHeadlineAndId() {
  var article = new Article("Storm Ciara - on the move", 1)
  assert.isTrue(article.viewHeadline() === "Storm Ciara - on the move");
  assert.isTrue(article.id === 1)
})();