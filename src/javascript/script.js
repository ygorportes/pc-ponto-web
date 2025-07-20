$(document).ready(function () {
  $(".mobile_btn").on("click", function () {
    $(".mobile_menu").toggleClass("active");
    $(".mobile_btn").find("i").toggleClass("fa-x");
  });

  $(document).on("click", function (event) {
    if (
      $(".mobile_menu").hasClass("active") &&
      !$(event.target).closest(".mobile_menu, .mobile_btn").length
    ) {
      $(".mobile_menu").removeClass("active");
      $(".mobile_btn").find("i").removeClass("fa-x");
    }
  });

  $(".mobile_nav_list .list-item a").on("click", function () {
    $(".mobile_menu").removeClass("active");
    $(".mobile_btn").find("i").removeClass("fa-x");
  });
});