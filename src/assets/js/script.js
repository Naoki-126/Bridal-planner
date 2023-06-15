/* to-top
=========================== */
$(window).on("scroll", function ($) {
  if (100 < jQuery(this).scrollTop()) {
    jQuery("#js-to-top-button").show();
  } else {
    jQuery("#js-to-top-button").hide();
  }
});

/* drawer
=========================== */
//アイコンクリックで開閉
$('#js-drawer').on('click', function(e) {
  e.preventDefault();
  // $('.c-drawer').toggleClass('is-open');
  $('.p-drawer').toggleClass('is-open');
  $('.p-drawer__content').toggleClass('is-open');
  $('.p-drawer__background').toggleClass('is-open');
  return false;
});

$('.p-drawer__list').on('click', function(e) {
  e.preventDefault();
  // $('.c-drawer').removeClass('is-open');
  $('.p-drawer').removeClass('is-open');
  $('.p-drawer__content').removeClass('is-open');
  $('.p-drawer__background').removeClass('is-open');
  return false;
});

/* swiper
=========================== */
const swipe1 = new Swiper('.swipe1', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  // centeredSlides: true,

  breakpoints: {
    // when window width is >= 399px
    400: {
      slidesPerView: 1.06,
      spaceBetween: 10,
    },

    // when window width is >= 769px
    768: {
      slidesPerView: 2.1,
      spaceBetween: 20,
    },

    // when window width is >= 769px
    900: {
      slidesPerView: 2.4,
      spaceBetween: 30,
    },

    // when window width is >= 1149px
    1150: {
      slidesPerView: 2.8,
      spaceBetween: 40,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swipe2 = new Swiper('.swipe2', {
  loop: true,
  slidesPerView: 1.1,
  spaceBetween: 0,
  // centeredSlides: true,

    breakpoints: {
      // when window width is >= 400px
      400: {
        slidesPerView: 1.3,
        spaceBetween: 20
      },

      // when window width is >= 767px
      768: {
        slidesPerView: 1.8,
        spaceBetween: 20
      },

      900: {
        slidesPerView: 2.1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 2.5,
        spaceBetween: 20
      },

      1330: {
        slidesPerView: 3.1,
        spaceBetween: 20
      },

      1435: {
        slidesPerView: 3.35,
        spaceBetween: 20
      },
    },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const slider = new Swiper('.slider', {
  loop: true,

  slidesPerView: 3.5, // 一度に表示する枚数
  spaceBetween: 3,
  speed: 10000, // ループの時間
  allowTouchMove: false, // スワイプ無効
  autoplay: {
    delay: 0, // 途切れなくループ
    disableOnInteraction: false,
  },

  //768px以上
  breakpoints: {
    415: {
      slidesPerView: 4,
      spaceBetween: 3
    },

    768: {
      slidesPerView: 6,
      spaceBetween: 3
    },

    1441: {
      slidesPerView: 8,
      // slidesPerView: 8,
      spaceBetween: 3,
    }
  }

});

const swipe3 = new Swiper('.swipe3', {
  loop: true,
  slidesPerView: 1.1,
    // spaceBetween: 10,

    breakpoints: {
      // when window width is >= 767px
      400: {
        slidesPerView: 1.3,
        spaceBetween: 10
      },

      // when window width is >= 767px
      768: {
        slidesPerView: 2.6,
        spaceBetween: 10
      },

      1000: {
        slidesPerView: 3.2,
        spaceBetween: 10
      },

      1200: {
        slidesPerView: 3.78,
        spaceBetween: 10
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swipe4 = new Swiper('.swipe4', {
    loop: true,
    slidesPerView: 1.1,
    spaceBetween: 10,
    initialSlide: 4, // スライドの開始位置

    breakpoints: {
      // when window width is >= 399px
      400: {
        centeredSlides: true,
        initialSlide: 1, // スライドの開始位置
        slidesPerView: 1.35,
        spaceBetween: 10
      },

      // when window width is >= 767px
      768: {
        centeredSlides: true,
        initialSlide: 1, // スライドの開始位置
        slidesPerView: 2.9,
        spaceBetween: 10
      },

      1441: {
        slidesPerView: 3.2,
        spaceBetween: 10
      },
    },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

  const swipe5 = new Swiper('.swipe5', {
    loop: true,
    slidesPerView: 1,
    // spaceBetween: 10,

    breakpoints: {
      // when window width is >= 399px
      400: {
        slidesPerView: 1.02,
        spaceBetween: 16,
      },
    },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


const swipe6 = new Swiper('.swipe6', {
  loop: true,
  slidesPerView: 1.1,
  spaceBetween: 10,

  breakpoints: {
    // when window width is >= 309px
    410: {
      slidesPerView: 1.3,
      spaceBetween: 16,
    },
  },

// Navigation arrows
navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},
});

const swipe7 = new Swiper('.swipe7', {
  loop: true,
  slidesPerView: 1.1,
  spaceBetween: 10,

  breakpoints: {
    // when window width is >= 439px
    400: {
      slidesPerView: 1.26,
      spaceBetween: 16,
    },

    // when window width is >= 439px
    440: {
      slidesPerView: 1.6,
      spaceBetween: 16,
    },

    600: {
      slidesPerView: 2.1,
      spaceBetween: 16,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swipe8 = new Swiper('.swipe8', {
  loop: true,
  slidesPerView: 1.1,
  spaceBetween: 10,

  breakpoints: {
    // when window width is >= 309px
    400: {
      slidesPerView: 1.23,
      spaceBetween: 10,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/*  ハンバーガーメニュー実装
=========================== */
