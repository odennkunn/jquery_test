$(function(){
  $('#sign').on('click',function(){
    var mon = $("#month").val();
    var day = $("#day").val();
    if (String(day).length == 1) {
      var test = ( '0' + day ).slice( -2 );
    } else if (String(day).length == 2) {
      var test = day;
    }
    var num = mon + test;
    if (321 <= num && num <= 419) {
      $("#result").text("牡羊座(Aries)");
    } else if (420 <= num && num <= 520) {
      $("#result").text("牡牛座(Taurus)");
    } else if (521 <= num && num <= 621) {
      $("#result").text("双子座(Gemini)");
    } else if (622 <= num && num <= 722) {
      $("#result").text("蟹座(Cancer)");
    } else if (723 <= num && num <= 822) {
      $("#result").text("獅子座(Leo)");
    } else if (823 <= num && num <= 922) {
      $("#result").text("乙女座(Virgo)");
    } else if (923 <= num && num <= 1023) {
      $("#result").text("天秤座(Libra)");
    } else if (1024 <= num && num <= 1121) {
      $("#result").text("蠍座(Scorpio)");
    } else if (1122 <= num && num <= 1221) {
      $("#result").text("射手座(Sagittarius)");
    } else if (1222 <= num) {
      $("#result").text("山羊座(Capricorn)");
    } else if (num <= 119) {
      $("#result").text("山羊座(Capricorn)");
    } else if (120 <= num && num <= 218) {
      $("#result").text("水瓶座(Aquarius)");
    } else if (219 <= num && num <= 320) {
      $("#result").text("魚座(Pisces)");
    }
  });
});

$(function(){
  var eto = ["申(monkey)", "酉(rooster)", "戌(dog)", "亥(boar)", "子(mouse)", "丑(ox)", "寅(tiger)", "卯(rabbit)", "辰(dragon)", "巳(snake)", "午(horse)", "未(sheep)"];
  $('#eto').on('click',function(){
    var year = $("#year").val();
    var target =year % 12;
    $("#result2").text(eto[target]);
  });
});