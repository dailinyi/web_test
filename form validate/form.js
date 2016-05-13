// JavaScript Document
$(document).ready(function(e) {
    

  $("#commentForm").validate({
      rules:{
        username:{
          required:true,
          minlength:2
        },
        email:{
          required:true,
          email:true
        },
        url:"url",
        comment:"required",
        valcode: {
          formula: "7+9"  
        }
      },
      messages:{
        username:{
          required:"主人,我要填的满满的",
          minlength:"哎唷,长度不够耶"
        }
      },
      errorElement:"em",
      success:function(label){
        label.text(" ").addClass('success')
      }
    });
	});