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

  $(document).ready(function() {
        var sliderTop = $('.media-carousel-block').offset().top;
        var sliderStop = $('.mobile-search').offset().top;
        var lastMode = "relative";

        if ($(window).width() > 992) {

          $(window).scroll(function() {
            var mode;
            if ($(this).scrollTop() >= sliderTop) {
              if ($(this).scrollTop() - sliderStop + $('.media-carousel-block').height() > 0)
                mode = 'relative';
              else
                mode = 'fixed';
            } else {
              mode = 'relative';
            }

            if (lastMode !== mode) {
              if (mode == 'fixed') {
                $('#nav').css('position', 'fixed');
                $('#nav').css('bottom', '0');
              } else {
                $('#nav').css('position', 'relative');
                $('#nav').css('bottom', navTop);
              }
              lastMode = mode;
            }
          });
        });
      });

})(jQuery);
