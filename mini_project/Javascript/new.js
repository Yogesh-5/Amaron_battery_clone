// Here i have made the function in jquery
$(function () {
  var counter = 1;

  // this is for the back function used in carousel.

  $("#back").on("click", function () {
    $(".ind-carousel-item").animate({
      left: "+=450px",
    });
    counter--;
    handlecontrol();
  });

  // / this is for the next function used in carousel.

  $("#next").on("click", function () {
    $(".ind-carousel-item").animate({
      left: "-=450px",
    });

    counter++;
    handlecontrol();
  });

  function handlecontrol() {
    totalslide = $(".ind-carousel-item").length;

    // this condition is for counter is at first position

    if (counter === 1) {
      $("#back").animate({ opacity: 0 }).prop("disabled", true);
      $("#next").animate({ opacity: 1 }).prop("disabled", false);

      // this conditon is for couter at last position so we will move back again and hide the next arrow
    } else if (counter === totalslide) {
      $("#back").animate({ opacity: 1 }).prop("disabled", false);
      $("#next").animate({ opacity: 0 }).prop("disabled", true);
    } else {
      $("#back").animate({ opacity: 1 }).prop("disabled", false);
      $("#next").animate({ opacity: 1 }).prop("disabled", false);
    }
  }
});
