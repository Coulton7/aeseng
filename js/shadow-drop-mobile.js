(function($) {
  $(document).ready(function() {
    $(".dropdown-menu li a").click(function(){
      $(this).parents(".dropdown").find('.shadow-drop-btn').html($(this).text() + ' <span class="caret"></span>');
      $(this).parents(".dropdown").find('.shadow-drop-btn').val($(this).data('value'));
    });
})(jQuery);
