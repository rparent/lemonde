var teaserArticle = document.getElementById('teaser_article');
if (teaserArticle) {
  $.ajax({
    type: 'GET',
    url: document.URL,
  }).done(function(response){
    var original = $(response).find('#articleBody')[0];
    var article = document.getElementById('articleBody');
    article.parentNode.replaceChild(original, article);
    teaserArticle.style.display = 'none';
  });
}
