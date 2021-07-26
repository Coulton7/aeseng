(function($) {
  $(".dropdown-menu li a").click(function(){
    $(".shadow-drop:first-child").text($(this).text());
    $(".shadow-drop:first-child").val($(this).text());
 });

if ($(window).width() > 992) {
  $(window).on("scroll", function() {
   var wScroll = ($(this).scrollTop() / $(window).height())*175 - 100;
   $('.net-zero-container').css({
     'transform': 'translate( 25%,' + (wScroll) + '%)'
   });
 });
} else{
  $('.net-zero-container').css({
    'transform': 'translate( 0% 0%)'
  });
}

})(jQuery);
