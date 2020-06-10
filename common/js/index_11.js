$(function() {
  var $win = $(window),
      $nav = $('.menu'),
      navPos = $nav.offset().top,
      fixedClass = 'is-fixed';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > navPos ) {
      $nav.addClass(fixedClass);
    } else {
      $nav.removeClass(fixedClass);
    }
  });
});