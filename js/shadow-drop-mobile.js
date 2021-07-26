(function($) {
  $(".dropdown-menu li a").click(function(){
    $(".shadow-drop:first-child").text($(this).text());
    $(".shadow-drop:first-child").val($(this).text());
 });

 $(window).on("scroll", function() {
   var wScroll = ($(this).scrollTop() / $(window).height()) + 50;
   $('.net-zero-container').css({
     'transform': 'translate( 25%, -' + (wScroll) + '%)'
   })
 });

})(jQuery);
