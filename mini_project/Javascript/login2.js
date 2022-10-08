$(function () {
  $("#submit1").hide();
  $("#submit2").hide();
  $(".hide").hide();

  $("#signUp").on("click", function () {
    console.log("click");
    $("#submit").show();
    $("#submit1").hide();
    $("#submit2").hide();
    $(".hide").hide();
  });

  $("#login,#login-mobile").on("click", function () {
    console.log("click");
    $("#submit").hide();
    $("#submit1").show();
    $("#submit2").hide();
    // $("#login-mobile").prop(checked,true);
    $(".hide").show();
  });

  $("#login-email,#login").on("click", function () {
    console.log("click");
    $("#submit").hide();
    $("#submit1").hide();
    $("#submit2").show();
    // $(".hide").show();
  });
});
