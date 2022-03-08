const {
  auto
} = require('@popperjs/core');

// require('../../../node_modules/jquery-ui/jquery-ui.min.js');
require('./js-component/jquery-ui.min.js');
require('slick-carousel');

// tabs
if ($(".timeline").length > 0) {
  $(function () {
    $("#tabs").tabs();
  });
};
// ToolTip
$(function () {
  $(document).tooltip();
});
// accordion
// $(function () {
//   $("#accordion").accordion();
// });

// hamburger
$('.hamburger').on('click', function (event) {
  event.preventDefault();
  $(this).toggleClass('active');
  $('.nav').toggleClass('active');
  $('body').toggleClass('is-modal');
  $('#overlay').toggleClass('active');
});

$('#overlay, .nav__item').on('click', function (event) {
  if ($(window).innerWidth() < 992) {
    $('.hamburger').removeClass('active');
    $('.nav').removeClass('active');
    $('body').removeClass('is-modal');
    $('#overlay').removeClass('active');
  }
});

$(document).keydown(function (event) {
  if (event.keyCode == 27) {
    $('.hamburger').removeClass('active');
    $('.nav').removeClass('active');
    $('body').removeClass('is-modal');
    $('#overlay').removeClass('active');
  }
});
// popup
if ($(".intro").length > 0) {
  let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
  let popup = document.querySelector('.popup'); // Само окно
  let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
  let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна

  openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
      e.preventDefault(); // Предотвращаем дефолтное поведение браузера
      popupBg.classList.add('active'); // Добавляем класс 'active' для фона
      popup.classList.add('active'); // И для самого окна
    })
  });

  closePopupButton.addEventListener('click', () => { // Вешаем обработчик на крестик
    popupBg.classList.remove('active'); // Убираем активный класс с фона
    popup.classList.remove('active'); // И с окна
  });

  document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if (e.target === popupBg) { // Если цель клика - фот, то:
      popupBg.classList.remove('active'); // Убираем активный класс с фона
      popup.classList.remove('active'); // И с окна
    }
  });
};
// slider main intro
if ($(".intro").length > 0) {
  $('.slider').slick({
    prevArrow: $(".slick-prev"),
    nextArrow: $(".slick-next"),
    dots: false,
    infinite: true,
    slidesToShow: 1,
    speed: 800,
    touchThreshold: 100
  });
  $(".slider").on('afterChange', function (event, slick, currentSlide) {
    $("#cp").text(currentSlide + 1);
  });
};

// slider menu
if ($(".menu").length > 0) {
  $('.slider-for').slick({

    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // fade: true,
    asNavFor: '.slider-nav',
    touchThreshold: 100
  });
  $('.slider-nav').slick({
    prevArrow: $(".slick-prev"),
    nextArrow: $(".slick-next"),
    asNavFor: '.slider-for',
    variableWidth: true,
    cssEase: 'linear',
    dots: false,
    centerMode: false,
    // touchThreshold: 50,
    focusOnSelect: true
  });
  $(".slider-nav").on('afterChange', function (event, slick, currentSlide) {
    $("#cp").text(currentSlide + 1);
  });
};

// 
// counter 
if ($('.counter').length > 0) {
  $(function () {
    $('.counter__decrease').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
    });
    $('.counter__increase').click(function () {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
    });
  });
}
// 