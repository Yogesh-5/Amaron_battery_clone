// $(".owl-carousel").owlCarousel({
//   loop: true,
//   margin: 10,
//   nav: true,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     600: {
//       items: 1,
//     },
//     1000: {
//       items: 1,
//     },
//   },
// });

$(function () {
  $("#ham").on("click", function () {
    console.log("hello");
    $(".main-header-menu-section > .menu").animate({
      left: "0%",
    });
  });

  $("#ss").on("click", function () {
    $(".main-header-menu-section > .menu").animate({
      left: "-80%",
    });
  });
});
