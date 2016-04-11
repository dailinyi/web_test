$(document).ready(function(e) {
    $('#left-in').click(function(e) {
		if(isNaN($.trim($('#number').val()))||$.trim($('#number').val())==""){
			alert("输入不能为非数字");
		}else{
			$('#show').prepend("<div>"+$.trim($('#number').val())+"</div>");
		}
		$('#number').val("");
    });
	$('#right-in').click(function(e) {
		if(isNaN($.trim($('#number').val()))||$.trim($('#number').val())==""){
			alert("输入不能为非数字");
		}else{
			$('#show').append("<div>"+$.trim($('#number').val())+"</div>");
		}
		$('#number').val("");
    });
	$('#left-out').click(function(e) {
		alert($('#show div').first().text());
		$('#show div').first().remove();
    });
	$('#right-out').click(function(e) {
        alert($('#show div').last().text());
		$('#show div').last().remove();
    });
});