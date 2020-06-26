//5-1
$(function(){
    $('#search_btn_1').on('click',function(){
        var param = $('#zipcode_1').val();
        $.ajax({
            url:'zip1.xml',
            type:'GET',
            dataType:'xml',
            timeout:1000,
            error:function() {
                alert("ajax通信ができません");
            },
            success:function(xml){
                var pcode = $(xml).find("location").find('postcode').text();
                if (param == pcode) {
                    $(xml).find("location").each(function() {
                        $('#zip_result').append('<p>' + $(this).find('city').text() + '</p>' + '<p>' + $(this).find('city-kana').text() + '</p>' + '<p>' + $(this).find('town').text() + '</p>' + '<p>' + $(this).find('prefecture').text() + '</p>' + '<p>' + $(this).find('postcode').text() + '</p>');
                    });
                } else {
                    alert("入力した郵便番号と一致するデータはありません");
                }
            }
        });
    });
});

//5-2
$(function(){
    $('#search_btn_2').on('click',function(){
        var param = $('#zipcode_2').val();
        $.getJSON("zip2.json" , function(data) {
            var len = data.length;
            var pcode = data[0].postcode;
            if (param == pcode) {
                for(var i = 0; i < len; i++) {
                    $('#zip_result').append($("<div>").text(data[i].city));
                    $('#zip_result').append($("<div>").text(data[i].name));
                    $('#zip_result').append($("<div>").text(data[i].town));
                    $('#zip_result').append($("<div>").text(data[i].prefecture));
                    $('#zip_result').append($("<div>").text(data[i].postcode));
                }
            } else {
                alert("入力した郵便番号と一致するデータはありません");
            }
        });
    });
});


//5-3　zipcloudを使用
$(function () {
    $("#search_btn_3").click(function () {
        var param = {zipcode: $('#zipcode_3').val()}
      //zipcloudのAPIのURL
        var send_url = "http://zipcloud.ibsnet.co.jp/api/search";
        $.ajax({
            type: "GET",
            cache: false,
            data: param,
            url: send_url,
            dataType: "jsonp",
            success: function (res) {
                if (res.status == 200) {
                    var html = '';
                    for (var i = 0; i < res.results.length; i++) {
                        var result = res.results[i];
                        html += '<h2>住所' + (i + 1) + '</h2>';
                        html += '<div>都道府県コード：' + result.prefcode + '</div>';
                        html += '<div>都道府県：' + result.address1 + '</div>';
                        html += '<div>市区町村：' + result.address2 + '</div>';
                        html += '<div>町域：' + result.address3 + '</div>';
                        html += '<div>都道府県(カナ)：' + result.kana1 + '</div>';
                        html += '<div>市区町村(カナ)：' + result.kana1 + '</div>';
                        html += '<div>町域(カナ)：' + result.kana1 + '</div>';
                    }
                    $('#zip_result').html(html);
                } else {
                    $('#zip_result').html(res.message);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(XMLHttpRequest);
            }
        });
    });
});