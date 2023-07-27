$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    dots: false
  });

  $(".menu").on("click", function () {
    $(".nav_menu").slideToggle();
  });
});
