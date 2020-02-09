
(function ArticleHasHeadlineAndIdAndLink() {
  var article = new Article("Storm Ciara - on the move", 1, "url")
  assert.isTrue(article.viewHeadline() === "Storm Ciara - on the move");
  assert.isTrue(article.id === 1)
  assert.isTrue(article.url === "url")
})();