var teaserArticle = document.getElementById('teaser_article');
if (teaserArticle) {
  $.ajax({
    type: 'GET',
    url: document.URL,
  }).done(function(response){
    var original = $(response).find('#articleBody')[0];
    var article = document.getElementById('articleBody');
    var zenButton = article.getElementsByClassName('btn_lecture_zen')[0];
    if (zenButton) {
      original.appendChild(zenButton)
    }
    article.parentNode.replaceChild(original, article);
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
    }, 10000);
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

