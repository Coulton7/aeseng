(function($) {
  $(".dropdown-menu li a").click(function(){
    $(".shadow-drop:first-child").text($(this).text());
    $(".shadow-drop:first-child").val($(this).text());
 });

if ($(window).width() > 992) {
  $(window).on("scroll", function() {
   var lScroll = ($(this).scrollTop() / $(window).height())*175 - 100;
   var tScroll = ($(this).scrollTop() / $(window).height())*175 - 50)
   $('.net-zero-container').css({
     'transform': 'translate( 25%,' + (lScroll) + '%)'
   });
   $('.mobile-carousel-caption').css({
     'transform': 'translate( 25%,' + (tScroll) + '%)'
   });
 });
} else {
  $('.net-zero-container').css({
    'transform': 'translate( 0% 0%)'
  });
  $('.mobile-carousel-caption').css({
    'transform': 'translate( 0% 0%)'
  });
}

})(jQuery);
