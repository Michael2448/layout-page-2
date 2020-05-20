$(document).ready(function () {
  //initialize swiper when document ready
  const width = $(window).width();
  let slidesNumber;

  if (width < 840) {
    slidesNumber = 1;
  } else if (width >= 840 && width < 1251) {
    slidesNumber = 2;
    $('.js-div-2').text('</>');
  } else {
    slidesNumber = 3;
    $('.js-div-2').text('<div>');
  }

  var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      loop: true,
      slidesPerView: slidesNumber,
      spaceBetween: 35,
      // Navigation arrows
      navigation: {
        nextEl: '.arrow-reverse',
        prevEl: '.arrow',
    },
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
  });

  $('.top-tags-flying').removeClass('fly-from-topleft fly-from-top fly-from-bottomright fly-from-left fly-from-bottomleft');
  $('.bottom-tags-flying').removeClass('fly-from-topleft fly-from-topright');

  $('.js-open-menu-button').click(()=> {
    $('.js-open-menu-button').hide();
    $('.js-close-menu-button').show();
    $('.js-menu').show();
    $('.js-menu').addClass('menu-mobile');
  });

  $('.js-close-menu-button').click(()=> {
    $('.js-open-menu-button').show();
    $('.js-close-menu-button').hide();
    $('.js-menu').hide();
  });

  $('a[href^="#"]').click(function(){
    //Сохраняем значение атрибута href в переменной:
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top}, 800);
    return false;
    });





});

