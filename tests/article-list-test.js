(function ArticleListTakesArticles() {
    var list = new List();
    list.newArticle("Corona DeathS")
    list.newArticle("Oscars 2020")
    assert.isTrue(list.array[0].headline === "Corona Deaths");
    assert.isTrue(list.array[1].headline === "Oscars 2020");
})();

(function AddIdToArticle() {
    var list = new List();
    list.newArticle("Corona Deaths")
    assert.isTrue(list.array[0].id === 0);
})();