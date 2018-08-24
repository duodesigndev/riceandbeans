$(function() {
  $("#contactForm .input__button").click(function() {
    var data = {
      name: $("#form_name").val(),
      email: $("#form_email").val(),
      message: $("#msg_text").val()
    };

      $.ajax({
          type: "POST",
          url: "email.php",
          data: data,
          success: function(){
            $('.input__button').addClass('sucess');
          },
          error: function() {
            $('.input__button').addClass('error');
          }
      });
      return false;
  });
});