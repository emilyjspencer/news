(function ArticleListTakesArticles() {
    var articleList = new ArticleList();
    articleList.addArticle("Corona Deaths", 1, "url")
    articleList.addArticle("Oscars 2020", 2, "url2")
    assert.isTrue(articleList.articles[0].headline === "Corona Deaths");
    assert.isTrue(articleList.articles[0].id === 0);
    assert.isTrue(articleList.articles[0].url === "url");
    assert.isTrue(articleList.articles[1].headline === "Oscars 2020");
    assert.isTrue(articleList.articles[1].id === 1);
    assert.isTrue(articleList.articles[1].url === "url2");
})();

(function AddIdToArticle() {
    var articleList = new ArticleList();
    articleList.addArticle("Corona Deaths", 0, "url")
    assert.isTrue(articleList.articles[0].id === 0);
})();

(function AddURLToArticle() {
    var articleList = new ArticleList();
    articleList.addArticle("Corona Deaths", 0, "url")
    assert.isTrue(articleList.articles[0].url === "url");
})();