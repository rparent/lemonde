$.ajax({
  type: "GET",
  url: document.URL,
}).done(function(response){
  var original = $(response);
  var article = document.getElementById('articleBody');
  article.parentNode.replaceChild(original.find('#articleBody')[0], article);
  document.getElementById('teaser_article').style.display = 'none';
});
