(function($) {
  $(".dropdown-menu li a").click(function(){
    $(".shadow-drop:first-child").text($(this).text());
    $(".shadow-drop:first-child").val($(this).text());
 });

 $(function() {
  $(window).scroll(function(){
    var $container = $(".net-zero-container", ".mobile-carousel-caption");
    $container.toggleClass('scrolled', $(this).scrollTop() > $container.height());
  });
});

})(jQuery);
