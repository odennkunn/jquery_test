( function(){

  document.addEventListener('DOMContentLoaded',outputClock,false);
  function outputClock(){
    const DIG_OBJ = document.getElementById('digits');
    for( var i=0; i<8; i++ ){
      const ADD_DIV = document.createElement('span');
      ADD_DIV.setAttribute('id','Nums'+i);
      DIG_OBJ.appendChild(ADD_DIV);
      if( i==2 || i==5 ){ img_src = '../common/image/colon.png'; } //コロンと0の画像を挿入
      else{ img_src = '../common/image/0.png'; }
      ADD_DIV.innerHTML = '<img id="dig'+i+'" src="'+img_src+'">';
    }
    moveDigital();
  }

//時間に応じた画像を取得、srcを変更
  function moveDigital(){
    var now   = new Date();
    var hour   = now.getHours();
    var hour2  = hour % 10;
    var hour1  = (hour-hour2) / 10 ;
    var mine   = now.getMinutes();
    var mine2  = mine % 10;
    var mine1  = (mine - mine2) / 10;
    var sec    = now.getSeconds();
    var sec2   = sec % 10;
    var sec1   = (sec - sec2) / 10;
    document.getElementById('dig0').src = '../'+'common/'+'image/'+hour1+'.png';
    document.getElementById('dig1').src = '../'+'common/'+'image/'+hour2+'.png';
    document.getElementById('dig3').src = '../'+'common/'+'image/'+mine1+'.png';
    document.getElementById('dig4').src = '../'+'common/'+'image/'+mine2+'.png';
    document.getElementById('dig6').src = '../'+'common/'+'image/'+sec1+'.png';
    document.getElementById('dig7').src = '../'+'common/'+'image/'+sec2+'.png';
    Blinks();
  }

//秒数の前のコロンの動き
  function Blinks(){
    const COL_OBJ = document.getElementById('dig5').style;
    if ( COL_OBJ.visibility=='hidden' )
    COL_OBJ.visibility = 'visible';
    else COL_OBJ.visibility = 'hidden';
  }
  setInterval( moveDigital,500 );
  }() );