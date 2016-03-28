// JavaScript Document
$(document).ready(function(e) {
    $('#send').click(function(e) {
		$('span').empty()
				 .append($('#username').val());
    });
});