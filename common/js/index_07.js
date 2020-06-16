window.onload = function(){
    initialize(35.6803997, 139.7690174);
};

var map;
var maker;
var infoWindow;
var err = google.maps.DirectionsStatus;
    function initialize(lat, lng) {

      var mapOptions = {
        center: new google.maps.LatLng(lat, lng),
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      map = new google.maps.Map(document.getElementById("target"),
          mapOptions);

      map.addListener('click', function(e) {
        getClickLatLng(e.latLng, map);
      });

      directionsRenderer = new google.maps.DirectionsRenderer({
        polylineOptions: {
        strokeColor: '#FF0000',
        strokeWeight: 4,
        strokeOpacity: 0.7
        }
      });
      directionsRenderer.setMap(map);
    }

function search(){
  var place = document.getElementById('keyword').value;
  var geocoder = new google.maps.Geocoder();

  geocoder.geocode({"address" : place}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
          var lat = results[0].geometry.location.lat();
          var lng = results[0].geometry.location.lng();
          var mark = {
              lat: lat,
              lng: lng
          };
          marker = new google.maps.Marker({
          position: mark,
          map: map
          });
          map.setCenter(results[0].geometry.location);
          cnt =0;
    }

  });
}

function deleteMakers() {
  if(marker != null){
    marker.setMap(null);
  }
  marker = null;
}

$(function(){
  $('#search').on('click',function(){
    search();
  });
  $('#clear').on('click',function(){
    deleteMakers();
  });
});


function getClickLatLng(lat_lng, map) {
  document.getElementById('lat').value=lat_lng.lat();
  document.getElementById('lng').value=lat_lng.lng();

  var keido = lat_lng.lat();
  var ido = lat_lng.lng();

  marker = new google.maps.Marker({
    position: lat_lng,
    map: map
  });
  // 座標の中心をずらす
  map.panTo(lat_lng);

  infoWindow = new google.maps.InfoWindow({
    content: '<div class="sample">経度</div>' + keido + '<div class="sample">緯度</div>' + ido,
});

  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });
}

//検索開始
function searchRoute() {
  //textboxからの値を取得
  var start = document.getElementById("begin").value;
  var end = document.getElementById("end").value;
  //検索設定
  directions = new google.maps.DirectionsService();	//ルート生成
  //ルートリクエスト
  directions.route({
    origin:start,		//開始地点
    destination:end,	//終了地点
    travelMode:google.maps.DirectionsTravelMode.DRIVING,	//ルートタイプ(車)
    avoidHighways:true,		//高速道路(使わない)
    avoidTolls:true,		//有料道路(使わない)
    optimizeWaypoints: true,	//最適化された最短距離にする。
  },
  function(results, status) {	//ルート結果コールバック関数
    if (status == err.OK) {	//検索結果がtrueの場合
	directionsRenderer.setDirections(results);
    } else {	//検索結果がfalseの場合
	alert('エラー');
    }
    });
}

$(function(){
  $('#route').on('click',function(){
    searchRoute();
  });
});