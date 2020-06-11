$(function(){
	$('#search').on("click",function(){
    var result = new RegExp($('#input_box').val());
		$('#table tbody tr').each(function(){
      var txt = $(this).find("td:eq(2)").html();
			if(txt.match(result) != null){
				$(this).show();
			}else{
				$(this).hide();
			}
		});
	});
});

$(function(){
  $('.delete').click(function() {
    let row = $(this).closest("tr").remove();
    $(row).remove();
  });
});

$(function(){
  var idx = 12;
  $('#add_line').click(function(){
    var ja = $("#ja").val();
    var latin = $("#latin").val();
    $('#table').append('<tr><td><button class="delete">削除</button></td><td>' + (++idx) + '</td><td>' + (ja) + '</td><td>' + (latin) + '</td></tr>');
  });
});

$(function(){
  $('#table td').click(function() {
    $('#table').find("tr").removeClass("selected");
    $(this).closest("tr").addClass("selected");
    var ids = $(this).closest("tr").find('.ids').text();
    var lang = $(this).closest("tr").find('.lang').text();
    var eng = $(this).closest("tr").find('.eng').text();
    $('#id_change').val(ids);
    $('#ja_change').val(lang);
    $('#latin_change').val(eng);
  });
});

$(function(){
  $('#save').click(function() {
    var after_id = $('#id_change').val();
    var after_ja = $('#ja_change').val();
    var after_la = $('#latin_change').val();
    $('.selected').find('.ids').text(after_id);
    $('.selected').find('.lang').text(after_ja);
    $('.selected').find('.eng').text(after_la);
  });
});


$(function(){
  $('#sort').change(function() {
    var select_num = $('#sort').prop('selectedIndex');
    if (select_num == 1) {
      $('#table tbody').html(
        $('#table  tbody tr').sort(function(a, b) {
          if ($(a).find('.ids').eq(0).text() < $(b).find('.ids').eq(1).text()) {
            return 1;
          } else {
            return -1;
          }
        })
      );
    } else if (select_num == 0) {
      $('#table tbody').html(
        $('#table  tbody tr').sort(function(a, b) {
          if ($(a).find('.ids').eq(0).text() > $(b).find('.ids').eq(1).text()) {
            return -1;
          } else {
            return 1;
          }
        })
      );
    }
  });
});