function translate(){
    var url = window.location.href;
    if(url.startsWith("https://translate.google.com")){
        var newurl = "http://crashxz.github.io";
    }
    else{
        var newurl = "https://translate.google.com/translate?sl=en&tl=ru&u="+url;
    }
    
    location.replace(newurl);
}

$(function() {
    if(document.getElementsByClassName('goog-te-banner-frame skiptranslate')[0] !== undefined) {
        document.getElementsByClassName('goog-te-banner-frame skiptranslate')[0].style.display  = 'none';
        document.body.style.top = '0px';
      }
});