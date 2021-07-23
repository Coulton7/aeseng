(function($) {
  $(document).ready(function() {
    $("<select />").appendTo(".shadow-box-tabs");

    // Create default option "Go to..."
    $("<option />", {
       "selected": "selected",
       "value"   : "",
       "text"    : "Go to..."
    }).appendTo(".shadow-drop");

    // Populate dropdown with menu items
    $(".shadow-box-tabs .nav a").each(function() {
     var el = $(this);
     $("<option />", {
         "value"   : el.attr("href"),
         "text"    : el.text()
     }).appendTo(".shadow-drop");
    });

    $(".shadow-drop").change(function() {
      window.location = $(this).find("option:selected").val();
    });
  });
})(jQuery);
