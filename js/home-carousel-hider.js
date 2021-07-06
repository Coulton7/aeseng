(function($) {
  $('#carousel-fade').on('slid.bs.carousel', function() {
    var carouselData = $(this).data('bs.carousel');
    var currentIndex = carouselData.getItemIndex(carouselData.$element.find('.item.active'));
    var total = carouselData.$items.length;
    var slide = (currentIndex + 1);
    if (slide === 1) {
      if ($('.sus-news-carousel').hasClass('display-none')) {
        $('.sus-news-carousel').removeClass('display-none');
      }
      if (!$('.why-news-carousel').hasClass('display-none')) {
        $('.why-news-carousel').addClass('display-none');
      }
    } else if (slide === 2) {
      if ($('.why-news-carousel').hasClass('display-none')) {
        $('.why-news-carousel').removeClass('display-none');
      }
      if (!$('.sus-news-carousel').hasClass('display-none')) {
        $('.sus-news-carousel').addClass('display-none');
      }
    }
  });
})(jQuery);
