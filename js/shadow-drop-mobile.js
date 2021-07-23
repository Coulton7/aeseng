(function($) {
  $(document).ready(function() {
    $(function(){
       $(".dropdown-menu").on('click', 'li a', function(){
         $(".shadow-drop-btn:first-child").text($(this).text());
         $(".shadow-drop-btn:first-child").val($(this).text());
      });
   });
})(jQuery);
