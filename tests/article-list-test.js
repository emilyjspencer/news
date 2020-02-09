(function ArticleListTakesArticles() {
    var articleList = new ArticleList();
    articleList.addArticle("Corona DeathS")
    articlelist.addArticle("Oscars 2020")
    assert.isTrue(articlelist.articles[0].headline === "Corona Deaths");
    assert.isTrue(articlelist.articles[0].id === 0);
    assert.isTrue(articlelist.articles[1].headline === "Oscars 2020");
    assert.isTrue(articlelist.articles[1].id === 1);
})();

(function AddIdToArticle() {
    var articleList = new ArticleList();
    articleList.addArticle("Corona Deaths")
    assert.isTrue(articleList.articles[0].id === 0);
})();