$(document).ready(function() {
  $('.scroll-down').click(function(e) {
      $('html,body').animate({scrollTop: $(document).height()}, 400);
  });
});