javascript: (function() {
    var head = document.getElementsByTagName("body")[0];
    var js = document.createElement("script");
    js.type = "text/javascript";
    js.text = 'document.fullScreenElement = document.mozFullScreen = document.webkitIsFullScreen = true; if (document.exitFullscreen) {      document.exitFullscreen();    } else if (document.msExitFullscreen) {      document.msExitFullscreen();    } else if (document.mozCancelFullScreen) {      document.mozCancelFullScreen();    } else if (document.webkitExitFullscreen) {      document.webkitExitFullscreen();    } ';
    head.appendChild(js);
})();
