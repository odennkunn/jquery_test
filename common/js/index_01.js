$(function() {
  $('.js_01').mouseover(function() {
    $(this).css('background', 'red');
  }).mouseout(function() {
    $(this).css('background', '#FF9999');
  });
});

$(function() {
  $('.js_02').mouseover(function() {
    $(this).css({'height':'400px','width':'400px','line-height':'400px'});
  }).mouseout(function() {
    $(this).css({'height':'300px','width':'300px','line-height':'300px'});
  });
});


$(function() {
  $('.js_03').mouseover(function() {
    $(this).animate({height: '400px',width:'400px','line-height':'400px'}, 1000);
  }).mouseout(function() {
    $(this).animate({height: '300px',width:'300px','line-height':'300px'}, 1000);
  });
});