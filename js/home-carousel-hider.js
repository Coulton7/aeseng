(function($) {
  $(document).ready(function() {
    $('#carousel-fade').on('slid.bs.carousel', function() {
      var carouselData = $(this).data('bs.carousel');
      var currentIndex = carouselData.getItemIndex(carouselData.$element.find('.item.active'));
      var total = carouselData.$items.length;
      var slide = (currentIndex + 1);
      if (slide === 1) {
        if ($('.sus-media-carousel').hasClass('display-none')) {
          $('.sus-media-carousel').removeClass('display-none');
          if ($(window).width() < 767) {
            $('.sus-media-carousel').find('.inner').addClass('carousel-inner');
            $('.sus-media-carousel').find('.media-tab.active .mob-slide:first').addClass('item active');
            $('.sus-media-carousel').find('.media-tab.active .mob-slide').addClass('item');
          }
        }
        if (!$('.tech-media-carousel').hasClass('display-none')) {
          $('.tech-media-carousel').addClass('display-none');
          $('.tech-media-carousel').find('.inner').removeClass('carousel-inner');
          $('.tech-media-carousel').find('.mob-slide').removeClass('item active');
        }
        if (!$('.cust-media-carousel').hasClass('display-none')) {
          $('.cust-media-carousel').addClass('display-none');
          $('.cust-media-carousel').find('.inner').removeClass('carousel-inner');
          $('.cust-media-carousel').find('.mob-slide').removeClass('item active');
        }
        if (!$('.why-media-carousel').hasClass('display-none')) {
          $('.why-media-carousel').addClass('display-none');
          $('.why-media-carousel').find('.inner').removeClass('carousel-inner');
          $('.why-media-carousel').find('.mob-slide').removeClass('item active');
        }
      } else if (slide === 2) {
        if ($('.tech-media-carousel').hasClass('display-none')) {
          $('.tech-media-carousel').removeClass('display-none');
          if ($(window).width() < 767) {
            $('.tech-media-carousel').find('.inner').addClass('carousel-inner');
            $('.tech-media-carousel').find('.media-tab.active .mob-slide:first').addClass('item active');
            $('.tech-media-carousel').find('.media-tab.active .mob-slide').addClass('item');
          }
        }
        if (!$('.sus-media-carousel').hasClass('display-none')) {
          $('.sus-media-carousel').addClass('display-none');
          $('.sus-media-carousel').find('.inner').removeClass('carousel-inner');
          $('.sus-media-carousel').find('.mob-slide').removeClass('item active');
        }
        if (!$('.cust-media-carousel').hasClass('display-none')) {
          $('.cust-media-carousel').addClass('display-none');
          $('.cust-media-carousel').find('.inner').removeClass('carousel-inner');
          $('.cust-media-carousel').find('.mob-slide').removeClass('item active');
        }
        if (!$('.why-media-carousel').hasClass('display-none')) {
          $('.why-media-carousel').addClass('display-none');
          $('.why-media-carousel').find('.inner').removeClass('carousel-inner');
          $('.why-media-carousel').find('.mob-slide').removeClass('item active');
        }
      } else if (slide === 3) {
        if ($('.cust-media-carousel').hasClass('display-none')) {
          $('.cust-media-carousel').removeClass('display-none');
          if ($(window).width() < 767) {
            $('.cust-media-carousel').find('.inner').addClass('carousel-inner');
            $('.cust-media-carousel').find('.media-tab.active .mob-slide:first').addClass('item active');
            $('.cust-media-carousel').find('.media-tab.active .mob-slide').addClass('item');
          }
        }
        if (!$('.sus-media-carousel').hasClass('display-none')) {
          $('.sus-media-carousel').addClass('display-none');
          $('.sus-media-carousel').find('.inner').removeClass('carousel-inner');
          $('.sus-media-carousel').find('.mob-slide').removeClass('item active');
        }
        if (!$('.tech-media-carousel').hasClass('display-none')) {
          $('.tech-media-carousel').addClass('display-none');
          $('.tech-media-carousel').find('.inner').removeClass('carousel-inner');
          $('.tech-media-carousel').find('.mob-slide').removeClass('item active');
        }
        if (!$('.why-media-carousel').hasClass('display-none')) {
          $('.why-media-carousel').addClass('display-none');
          $('.why-media-carousel').find('.inner').removeClass('carousel-inner');
          $('.why-media-carousel').find('.mob-slide').removeClass('item active');
        }
      } else if (slide === 4) {
        if ($('.why-media-carousel').hasClass('display-none')) {
          $('.why-media-carousel').removeClass('display-none');
          if ($(window).width() < 767) {
            $('.why-media-carousel').find('.inner').addClass('carousel-inner');
            $('.why-media-carousel').find('.media-tab.active .mob-slide:first').addClass('item active');
            $('.why-media-carousel').find('.media-tab.active .mob-slide').addClass('item');
          }
        }
        if (!$('.sus-media-carousel').hasClass('display-none')) {
          $('.sus-media-carousel').addClass('display-none');
          $('.sus-media-carousel').find('.inner').removeClass('carousel-inner');
          $('.sus-media-carousel').find('.mob-slide').removeClass('item active');
        }
        if (!$('.tech-media-carousel').hasClass('display-none')) {
          $('.tech-media-carousel').addClass('display-none');
          $('.tech-media-carousel').find('.inner').removeClass('carousel-inner');
          $('.tech-media-carousel').find('.mob-slide').removeClass('item active');
        }
        if (!$('.cust-media-carousel').hasClass('display-none')) {
          $('.cust-media-carousel').addClass('display-none');
          $('.cust-media-carousel').find('.inner').removeClass('carousel-inner');
          $('.cust-media-carousel').find('.mob-slide').removeClass('item active');
        }
      }
    });
  });
})(jQuery);
