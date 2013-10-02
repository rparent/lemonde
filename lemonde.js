var teaserArticle = document.getElementById('teaser_article');
if (teaserArticle) {
  $.ajax({
    type: 'GET',
    url: document.URL,
  }).done(function(response){
    var original = $(response);
    var article = document.getElementById('articleBody');
    article.parentNode.replaceChild(original.find('#articleBody')[0], article);
    teaserArticle.style.display = 'none';
  });
}

var zenButton = document.getElementsByClassName('btn_lecture_zen')[0];
if (zenButton) {
  zenButton.addEventListener('click', function() {
    var overlayRemovalLoop = setInterval(function(){
      removeOverlay()
    }, 100);
    setTimeout(function() {
      stopLoopFunction(overlayRemovalLoop)
    }, 5000);
  }, false);
}

function removeOverlay() {
  if (document.getElementsByClassName('overlay offre_decouverte')[0]) {
    document.getElementsByClassName('overlay offre_decouverte')[0].style.display = 'none';
    document.getElementsByClassName('fond_overlay offre_decouverte')[0].style.display = 'none';
  }
}

function stopLoopFunction($myVar) {
  clearInterval($myVar);
}

