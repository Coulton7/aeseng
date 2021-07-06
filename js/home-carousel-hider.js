(function($) {
  $('#carousel-fade').on('slid.bs.carousel', function() {
    var carouselData = $(this).data('bs.carousel');
    var currentIndex = carouselData.getItemIndex(carouselData.$element.find('.item.active'));
    var total = carouselData.$items.length;
    var slide = (currentIndex + 1);
    if (slide === 1) {
      if ($('.sus-media-carousel').hasClass('display-none')) {
        $('.sus-media-carousel').removeClass('display-none');
      }
      if (!$('.why-media-carousel').hasClass('display-none')) {
        $('.why-media-carousel').addClass('display-none');
      }
    } else if (slide === 2) {
      if ($('.why-media-carousel').hasClass('display-none')) {
        $('.why-media-carousel').removeClass('display-none');
      }
      if (!$('.sus-media-carousel').hasClass('display-none')) {
        $('.sus-media-carousel').addClass('display-none');
      }
    }
  });
})(jQuery);
