//最初にどのスライドから表示するかを選択
var currentItemNum = 1;
var $slideContainer = $('.slider__container');

//クラスslider__itemの要素の個数を算出
var slideItemNum = $('.slider__item').length;

//スタイド１つあたりの横幅を算出
var slideItemHeight = $('.slider__item').innerHeight();


//スライド１つあたりの横幅とスライドの個数から
var slideContainerHeight = slideItemHeight * slideItemNum;

//スライドさせる速さ(animateメソッド用)
var DURATION = 1000;

//横に並べた複数のスライドを格納する用コンテナの横幅を設定
$slideContainer.attr('style', 'height:' + slideContainerHeight + 'px');

//スライドを自動的に変化させる関数
function autoSlide(){

    //現在のスライドの番号が全部のスライドの数より少ないとき
    if(currentItemNum < slideItemNum){
        //スライド用コンテナをanimateメソッドで変化させる
        $slideContainer.animate({top: '-='+slideItemHeight+'px'}, DURATION);//現在のCSSのleftのプロパティの値からスライド１つあたりの横幅分変化させる
        currentItemNum++;//現在のスライド番号を１増やす
        if(currentItemNum==2) {
          $('#one').css('background','#DDDDDD');
          $('#two').css('background','red');
          $('#three').css('background','#DDDDDD');
          $('#four').css('background','#DDDDDD');
        }else if(currentItemNum==3) {
          $('#three').css('background','red');
          $('#one').css('background','#DDDDDD');
          $('#two').css('background','#DDDDDD');
          $('#four').css('background','#DDDDDD');
        }else if(currentItemNum==4) {
          $('#four').css('background','red');
          $('#one').css('background','#DDDDDD');
          $('#two').css('background','#DDDDDD');
          $('#three').css('background','#DDDDDD');
        }
         //現在のスライドの番号が全部のスライドの数と同じとき
    }else if(currentItemNum = slideItemNum){
      //現在のCSSのleftのプロパティの値を変更(徐々に変化させないのでanimateメソッドは使わない)
      $slideContainer.css('top', '+='+slideItemHeight*(slideItemNum-1)+'px');
      currentItemNum = 1;//現在のスライド番号を１に戻す
      $('#one').css('background','red');
  }
}



//setInterval関数で適当な秒数ごとに実施
setInterval(autoSlide, 2000);