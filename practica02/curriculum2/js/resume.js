'use strict'

! function(e) {
  e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
      var t = e(this.hash);
      if ((t = t.length ? t : e("[name=" + this.hash.slice(1) + "]")).length) return e("html, body").animate({
        scrollTop: t.offset().top
      }, 1e3, "easeInOutExpo"), !1
    }
  }), e(".js-scroll-trigger").click(function() {
    e(".navbar-collapse").collapse("hide")
  }), e("body").scrollspy({
    target: "#sideNav"
  })
}(jQuery);

 let tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 let firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
 let player1;
 let player2;
 function onYouTubeIframeAPIReady() {
   player1 = new YT.Player('video1', {
     height: '200',
     width: '350',
     videoId: '-rN0cWcEXk0',
     events: {
       'onReady': onPlayerReady,
     }
   });
   player2 = new YT.Player('video2', {
     height: '200',
     width: '350',
     videoId: 'ORL6MbKQo9M',
   });
 }
 function onPlayerReady(event) {
   event.target.playVideo();
 }
