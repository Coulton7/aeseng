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
      if (!$('.tech-news-carousel, .cust-news-carousel, .why-news-carousel').hasClass('display-none')) {
        $('.tech-news-carousel').addClass('display-none');
        $('.cust-news-carousel').addClass('display-none');
        $('.why-news-carousel').addClass('display-none');
      }
    } else if (slide === 2) {
      if ($('.tech-news-carousel').hasClass('display-none')) {
        $('.tech-news-carousel').removeClass('display-none');
      }
      if (!$('.sus-news-carousel, .cust-news-carousel, .why-news-carousel').hasClass('display-none')) {
        $('.sus-news-carousel').addClass('display-none');
        $('.cust-news-carousel').addClass('display-none');
        $('.why-news-carousel').addClass('display-none');
      }
    } else if (slide === 3) {
      if ($('.cust-news-carousel').hasClass('display-none')) {
        $('.cust-news-carousel').removeClass('display-none');
      }
      if (!$('.sus-news-carousel, .tech-news-carousel, .why-news-carousel').hasClass('display-none')) {
        $('.sus-news-carousel').addClass('display-none');
        $('.tech-news-carousel').addClass('display-none');
        $('.why-news-carousel').addClass('display-none');
      }
    } else if (slide === 4) {
      if ($('.why-news-carousel').hasClass('display-none')) {
        $('.why-news-carousel').removeClass('display-none');
      }
      if (!$('.sus-news-carousel, .tech-news-carousel, .cust-news-carousel').hasClass('display-none')) {
        $('.sus-news-carousel').addClass('display-none');
        $('.tech-news-carousel').addClass('display-none');
        $('.cust-news-carousel').addClass('display-none');
      }
    }
  });
})(jQuery);
