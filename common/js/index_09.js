$(function(){
  $('#submit').on('click',function(){
    if(!$('#zipcode').val().match(/^\d{3}-?\d{4}$/)){
      $("#message").addClass('color');
      $("#message").text("郵便番号の形式が正しくありません。");
    }

    if(!$('#email').val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)){
      $("#message2").addClass('color');
      $("#message2").text("メールアドレスの形式が正しくありません");
    }
  });
});

$(function(){
  $('#change_01').on('click',function(){
    var target = $('#original').val();
    var result =  target.replace("J-PHONE", "Vodaphone");
    $('#after_01').val(result);
  });
  $('#change_02').on('click',function(){
    var target2 = $('#after_01').val();
    var result2 =  target2.replace("Vodaphone", "SoftBank");
    $('#after_02').val(result2);
  });
});

window.onload = function () {
  //今日の日時を表示
  var date = new Date()
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var toTwoDigits = function (num, digit) {
    num += ''
    if (num.length < digit) {
      num = '0' + num
    }
    return num
  }

  var yyyy = toTwoDigits(year, 4)
  var mm = toTwoDigits(month, 2)
  var dd = toTwoDigits(day, 2)
  var ymd = yyyy + "年" + mm + "月" + dd + "日";

  document.getElementById("no-hyphen").value = ymd;
}

$(function(){
  $('#date_change').on('click',function(){
    var today = $('#no-hyphen').val();
    var newday = today.replace(/年/g, '/').replace(/月/g, '/').replace(/日/g, '');
    $('#hyphen').val(newday);
  });
});