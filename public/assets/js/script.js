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
  slidesPerView: 2.64,
  // slidesPerView: 3.6,
    spaceBetween: 10,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swipe2 = new Swiper('.swipe2', {
  loop: true,
  slidesPerView: 3.25,
  // slidesPerView: 4.5,
    spaceBetween: 10,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const slider = new Swiper('.slider', {
  loop: true,

  slidesPerView: 6, // 一度に表示する枚数
  spaceBetween: 3,
  speed: 10000, // ループの時間
  allowTouchMove: false, // スワイプ無効
  autoplay: {
    delay: 0, // 途切れなくループ
    disableOnInteraction: false,
  },

  //1440px以上
  breakpoints: {
    1441: {
      slidesPerView: 8,
      // slidesPerView: 8,
      spaceBetween: 3,
    }
  }

});

const swipe3 = new Swiper('.swipe3', {
  loop: true,
  slidesPerView: 3.76,
  // slidesPerView: 1,
    spaceBetween: 10,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swipe4 = new Swiper('.swipe4', {
    loop: true,
    slidesPerView: 2.8,
    spaceBetween: 10,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

  const swipe5 = new Swiper('.swipe5', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
