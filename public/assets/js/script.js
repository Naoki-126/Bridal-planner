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
  $('.c-drawer').toggleClass('is-open');
  $('.p-drawer__menu').toggleClass('is-open');
  $('.p-drawer__content').toggleClass('is-open');
  $('.p-drawer__background').toggleClass('is-open');
  return false;
});

/* swiper
=========================== */
const swipe1 = new Swiper('.swipe1', {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 10,

  breakpoints: {
    // when window width is >= 767px
    768: {
      slidesPerView: 2.64,
      spaceBetween: 20
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
  slidesPerView: "auto",
    spaceBetween: 10,

    breakpoints: {
      // when window width is >= 767px
      768: {
        slidesPerView: 3.25,
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
  slidesPerView: 1,
    // spaceBetween: 10,

    breakpoints: {
      // when window width is >= 767px
      768: {
        slidesPerView: 3.76,
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
    slidesPerView: "auto",
    spaceBetween: 10,

    breakpoints: {
      // when window width is >= 767px
      768: {
        slidesPerView: 3.2,
        spaceBetween: 10
      },

      1440: {
        slidesPerView: 4.2,
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

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


const swipe6 = new Swiper('.swipe6', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,

// Navigation arrows
navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},
});

const swipe7 = new Swiper('.swipe7', {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 10,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swipe8 = new Swiper('.swipe8', {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 10,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
