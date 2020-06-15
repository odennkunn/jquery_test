$(function(){

  var arySpinnerCtrl = [];
  var spin_speed = 20;

  $('.btnspinner').on('touchstart mousedown click', function(e){
      if(arySpinnerCtrl['interval']) return false;
      var target = $(this).data('target');
      arySpinnerCtrl['target'] = target;
      arySpinnerCtrl['timestamp'] = e.timeStamp;
      arySpinnerCtrl['cal'] = Number($(this).data('cal'));
      if(e.type == 'click'){
          spinnerCal();
          arySpinnerCtrl = [];
          return false;
      }

      setTimeout(function(){
          if(!arySpinnerCtrl['interval'] && arySpinnerCtrl['timestamp'] == e.timeStamp){
              arySpinnerCtrl['interval'] = setInterval(spinnerCal, spin_speed);
          }
      }, 500);
  });

  $(document).on('touchend mouseup scroll', function(e){
      if(arySpinnerCtrl['interval']){
          clearInterval(arySpinnerCtrl['interval']);
          arySpinnerCtrl = [];
      }
  });

  function spinnerCal(){
      var target = $(arySpinnerCtrl['target']);
      var num = Number(target.val());
      num = num + arySpinnerCtrl['cal'];
      if(num > Number(target.data('max'))){
          target.val(Number(target.data('max')));
      }else if(Number(target.data('min')) > num){
          target.val(Number(target.data('min')));
      }else{
          target.val(num);
      }

      if (num < 20) {
        $('.bg').css('background','linear-gradient(to bottom,#FF6666,#FFF 20%,#FF6666 80%)');
      } else if (num < 50) {
        $('.bg').css('background','linear-gradient(to bottom,#FFCC66,#FFF 20%,#FFCC66 80%)');
      } else if (50 <= num) {
        $('.bg').css('background','linear-gradient(to bottom,#99CC66,#FFF 20%,#99CC66 80%)');
      }

      if (num == 0) {
        $('.bg').css('width','0px');
      } else if (num <= 10) {
        $('.bg').css('width','30px');
      } else if (num <= 20) {
        $('.bg').css('width','60px');
      } else if (num <= 30) {
        $('.bg').css('width','90px');
      } else if (num <= 40) {
        $('.bg').css('width','120px');
      } else if (num <= 50) {
        $('.bg').css('width','150px');
      } else if (num <= 60) {
        $('.bg').css('width','180px');
      } else if (num <= 70) {
        $('.bg').css('width','210px');
      } else if (num <= 80) {
        $('.bg').css('width','240px');
      } else if (num <= 90) {
        $('.bg').css('width','270px');
      } else if (num <= 100) {
        $('.bg').css('width','300px');
      }
  }
});