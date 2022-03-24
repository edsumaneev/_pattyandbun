const {
  auto
} = require('@popperjs/core');

require('./js-component/jquery-ui.min.js');
require('slick-carousel');

// tabs
if ($(".timeline").length > 0) {
  $(function () {
    $("#tabs").tabs();
  });
};
// accordion
if ($(".lk-page").length > 0) {
  $(function () {
    $("#accordion").accordion({
      header: ".accordion__header",
      icons: false,
      heightStyle: 'content',
      collapsible: true
    });
  });
};

// scroll to anchor
$(document).ready(function () {
  $(".menu__anchors, .meals-page__anchors").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top + 5;
    $('body,html').animate({
      scrollTop: top
    }, 800);
  });
});

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
  let popupBg = document.querySelector('.popup__bg');
  let popup = document.querySelector('.popup');
  let openPopupButtons = document.querySelectorAll('.open-popup');
  let closePopupButton = document.querySelector('.close-popup');

  openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      popupBg.classList.add('active');
      popup.classList.add('active');
    })
  });

  closePopupButton.addEventListener('click', () => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
  });

  document.addEventListener('click', (e) => {
    if (e.target === popupBg) {
      popupBg.classList.remove('active');
      popup.classList.remove('active');
    }
  });
};
// slider main intro
if ($(".intro").length > 0) {
  $('.slider').slick({
    prevArrow: $(".slick-prev"),
    nextArrow: $(".slick-next"),
    dots: false,
    // autoplay: 200,
    infinite: true,
    slidesToShow: 1,
    fade: true,
    speed: 800,
    touchThreshold: 100
  });
  $(".slider").on('afterChange', function (event, slick, currentSlide) {
    $("#cp").text(currentSlide + 1);
  });
};

// slider menu
if ($(".calculate").length > 0) {
  $('.slider-for').slick({

    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
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
    touchThreshold: 50,
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
};
// highlite aside menu
if ($('.menu').length > 0) {
  function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    var h = $(".goods__list").height();
    $('.menu__item').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + h > scrollPos) {
        $('.menu__item').removeClass("active-menu");
        currLink.addClass("active-menu");
      } else {
        currLink.removeClass("active-menu");
      }
    });
  }

  var menu_selector = $('.menu__item');
  $(document).ready(function () {

    $(document).on("scroll", onScroll);

    $("a[href^=\\#]").click(function (e) {
      e.preventDefault();
      $(document).off("scroll");
      // $(menu_selector + " a.active").removeClass("active");
      $(menu_selector).removeClass("active");
      $(this).addClass("active");
      var hash = $(this).attr("href");
      var target = $(hash);
      $("html, body").animate({
        scrollTop: target.offset().top
      }, 500, function () {
        window.location.hash = hash;
        $(document).on("scroll", onScroll);
      });
    });
  });
};

// st
if ($('.meals-page').length > 0) {
  var StickyElement = function (node) {
    var doc = $(document),
      fixed = false,
      anchor = node.find('.sticky-anchor'),
      content = node.find('.sticky-content');
    var onScroll = function (e) {
      var docTop = doc.scrollTop(),
        anchorTop = anchor.offset().top;
      if (docTop > anchorTop) {
        if (!fixed) {
          anchor.height(content.outerHeight());
          content.addClass('fixed');
          fixed = true;
        }
      } else {
        if (fixed) {
          anchor.height(0);
          content.removeClass('fixed');
          fixed = false;
        }
      }
    };
    $(window).on('scroll', onScroll);
  };
  var sticky = new StickyElement($('.sticky-element'));
};
// 
if ($('.meals-page').length > 0) {
  function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    var h = $(".block").height();
    $('.meals-page__item').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top - 50 <= scrollPos && refElement.position().top + h > scrollPos) {
        $('.meals-page__item').removeClass("active");
        $('.meals-page__item').addClass("ordinary");
        currLink.addClass("active");
        currLink.removeClass("ordinary");
      } else {
        currLink.removeClass("active");
      }
    });
  }

  var menu_selector = $('.meals-page__item');
  $(document).ready(function () {

    $(document).on("scroll", onScroll);

    $("a[href^=\\#]").click(function (e) {
      e.preventDefault();
      $(document).off("scroll");
      $(menu_selector).removeClass("active");
      $(this).addClass("active");

      var hash = $(this).attr("href");
      var target = $(hash);
      $("html, body").animate({
        scrollTop: target.offset().top
      }, 500, function () {
        window.location.hash = hash;
        $(document).on("scroll", onScroll);
      });
    });
  });
};
// popup
if ($(".popup").length > 0) {
  $('.popup-btn').on('click', function (e) {
    e.preventDefault();

    var elementID = $(this).attr("data-element");
    $('.popup#' + elementID).toggleClass('active');
    $('.popup-overlay').toggleClass('active');
  });

  $(".close-popup").on("click", function (e) {
    e.preventDefault();
    $(".popup").removeClass("active");
    $('.popup-overlay').toggleClass('active');
  });

  $(".popup-overlay").on("click", function (e) {
    e.preventDefault();
    $(".popup").removeClass("active");
    $('.popup-overlay').toggleClass('active');
  });

  $(document).keydown(function (e) {
    if (e.keyCode == 27) {
      e.preventDefault();
      $(".popup").removeClass("active");
      $('.popup-overlay').toggleClass('active');
    }
  });
};
// блокировать без подтверждения согласия
$("#agreed, #agreement").click(function () {
  if (($(this).prop("checked"))) {
    $(".popup__button--reg").removeAttr("disabled").removeClass("disabled");
  } else {
    $(".popup__button--reg").attr("disabled", "disabled").addClass("disabled");
  }
});
// tel
window.addEventListener("DOMContentLoaded", function () {
  function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select()
    }
  }

  function template(event) {
    var matrix = "+7 (___) - ___ - __ - __",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });
    if (event.type == "blur") {
      if (this.value.length == 2) this.value = ""
    } else setCursorPosition(this.value.length, this)
  }

  var phoneForm = document.querySelector("#regtel, #tel");

  if (phoneForm) {
    phoneForm.addEventListener("input", template, false);
    phoneForm.addEventListener("focus", template, false);
    phoneForm.addEventListener("blur", template, false);
  }
});