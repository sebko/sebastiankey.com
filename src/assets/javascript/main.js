$(document).ready(function() {
  $('.scroll-down').click(function(e) {
      console.log('link pressed')
      $('html,body').animate({scrollTop: $(document).height()}, 400);
  });
});