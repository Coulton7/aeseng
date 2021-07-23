(function($) {
  $(".dropdown-menu li a").click(function(){
    $(".shadow-drop:first-child").text($(this).text());
    $(".shadow-drop:first-child").val($(this).text());
 });
})(jQuery);
