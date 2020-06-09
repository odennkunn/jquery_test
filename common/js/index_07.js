function makeMap(lat, lng) {
  var canvas = document.getElementById('target'); // 地図を表示する要素を取得

  var latlng = new google.maps.LatLng(lat, lng);  // 中心の位置（緯度、経度）

  var mapOptions = {
      zoom: 17,
      center: latlng,
  };
  var map = new google.maps.Map(canvas, mapOptions); //作成
}

//ページのロードが完了したら地図を読み込む
window.onload = function(){
    makeMap(35.6803997, 139.7690174);
};





//////////////////////////////////////////
// var getMap = (function() {
//   function codeAddress(address) {
//     // google.maps.Geocoder()コンストラクタのインスタンスを生成
//     var geocoder = new google.maps.Geocoder();
//     //マーカー変数用意
//     var marker;
//     // geocoder.geocode()メソッドを実行
//     geocoder.geocode( { 'address': address}, function(results, status) {

//       // ジオコーディングが成功した場合
//       if (status == google.maps.GeocoderStatus.OK) {
//         // 変換した緯度・経度情報を地図の中心に表示
//         map.setCenter(results[0].geometry.location);

//         //☆表示している地図上の緯度経度
//         document.getElementById('lat').value=results[0].geometry.location.lat();
//         document.getElementById('lng').value=results[0].geometry.location.lng();

//         // マーカー設定
//         marker = new google.maps.Marker({
//           map: map,
//           position: results[0].geometry.location
//         });

//       // ジオコーディングが成功しなかった場合
//       } else {
//         console.log('Geocode was not successful for the following reason: ' + status);
//       }

//     });

//   }

//   //inputのvalueで検索して地図を表示
//   return {
//     getAddress: function() {
//       // ボタンに指定したid要素を取得
//       var button = document.getElementById("map_button");
//       // ボタンが押された時の処理
//       button.onclick = function() {
//         // フォームに入力された住所情報を取得
//         var address = document.getElementById("address").value;
//         // 取得した住所を引数に指定してcodeAddress()関数を実行
//         codeAddress(address);
//       }
//       //読み込まれたときに地図を表示
//       window.onload = function(){
//         // フォームに入力された住所情報を取得
//         var address = document.getElementById("address").value;
//         // 取得した住所を引数に指定してcodeAddress()関数を実行
//         codeAddress(address);
//       }
//     }
//   };

// })();
// getMap.getAddress();