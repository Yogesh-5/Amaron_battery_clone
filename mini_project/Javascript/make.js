$(window).scroll(function () {
  if ($(window).scrollTop() >= 300) {
    $("main-header-first").addClass("fixed-header");
    $("main-header-first-1").addClass("visible-title");
  } else {
    $("main-header-first").removeClass("fixed-header");
    $("main-header-first-1").removeClass("visible-title");
  }
});
