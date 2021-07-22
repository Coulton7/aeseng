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
        }
        if (!$('.tech-media-carousel').hasClass('display-none')) {
          $('.tech-media-carousel').addClass('display-none');
        }
        if (!$('.cust-media-carousel').hasClass('display-none')) {
          $('.cust-media-carousel').addClass('display-none');
        }
        if (!$('.why-media-carousel').hasClass('display-none')) {
          $('.why-media-carousel').addClass('display-none');
        }
      } else if (slide === 2) {
        if ($('.tech-media-carousel').hasClass('display-none')) {
          $('.tech-media-carousel').removeClass('display-none');
        }
        if (!$('.sus-media-carousel').hasClass('display-none')) {
          $('.sus-media-carousel').addClass('display-none');
        }
        if (!$('.cust-media-carousel').hasClass('display-none')) {
          $('.cust-media-carousel').addClass('display-none');
        }
        if (!$('.why-media-carousel').hasClass('display-none')) {
          $('.why-media-carousel').addClass('display-none');
        }
      } else if (slide === 3) {
        if ($('.cust-media-carousel').hasClass('display-none')) {
          $('.cust-media-carousel').removeClass('display-none');
        }
        if (!$('.sus-media-carousel').hasClass('display-none')) {
          $('.sus-media-carousel').addClass('display-none');
        }
        if (!$('.tech-media-carousel').hasClass('display-none')) {
          $('.tech-media-carousel').addClass('display-none');
        }
        if (!$('.why-media-carousel').hasClass('display-none')) {
          $('.why-media-carousel').addClass('display-none');
        }
      } else if (slide === 4) {
        if ($('.why-media-carousel').hasClass('display-none')) {
          $('.why-media-carousel').removeClass('display-none');
        }
        if (!$('.sus-media-carousel').hasClass('display-none')) {
          $('.sus-media-carousel').addClass('display-none');
        }
        if (!$('.tech-media-carousel').hasClass('display-none')) {
          $('.tech-media-carousel').addClass('display-none');
        }
        if (!$('.cust-media-carousel').hasClass('display-none')) {
          $('.cust-media-carousel').addClass('display-none');
        }
      }
    });
  });

  function checkOffset() {
    if ($('.media-carousel-block').offset().top + $('.media-carousel-block').height() >= $('.mobile-search').offset().top - 10)
      $('.media-carousel-block').css('position', 'relative');

    if ($(document).scrollTop() + window.innerHeight < $('.mobile-search').offset().top)
      $('.media-carousel-block').css('position', 'fixed'); // restore when you scroll up
  }

  $(document).ready(function() {
    if ($(window).width() > 992) {
      $(document).scroll(function() {
        checkOffset();
      });
    } else {
      $('.media-carousel-block').css('position', 'relative');

    }
  });
})(jQuery);
