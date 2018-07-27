/*(function( $ ) {
  calcIframeH();
})(jQuery);

$(window).resize(function(){
  calcIframeH();
});

function calcIframeH() {
  var iframeW = $("iframe").width();
  $("iframe").height(iframeW/16*9);
}*/

$(window).scroll(function() {
  var wW = $(window).width();
      wH = $(window).height();
      wS = $(this).scrollTop();

  if ( (wW > 890 && wS > 400) || (wW <= 890 && wS > 260)) {
      $(".header-bar").addClass("scroll");
      $(".header-bar-bg").addClass("scroll");
  }

  else {
      $(".header-bar").removeClass("scroll");
      $(".header-bar-bg").removeClass("scroll");
  }
})
