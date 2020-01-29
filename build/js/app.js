"use strict";

$(document).ready(function () {
  //burger
  if (document.querySelector('.js-burger')) {
    $('.js-burger').click(function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.js-nav').removeClass('active');
        $('.main').removeClass('opacity');
        $('body').removeClass('overflow');
        $('html').removeClass('overflow');
        $('.logo-black').removeClass('active');
        $('.logo-white').removeClass('active');
        $('.tel').removeClass('active');
      } else {
        $(this).addClass('active');
        $('.js-nav').addClass('active');
        $('.main').addClass('opacity');
        $('body').addClass('overflow');
        $('html').addClass('overflow');
        $('.logo-black').addClass('active');
        $('.logo-white').addClass('active');
        $('.tel').addClass('active');
      }
    });
  }
});
$(document).ready(function () {
  var $status = $('.pagingInfo');
  var $slickElement = $('.js-main-slider');
  $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + ' из ' + slick.slideCount);
  });
  $('.js-main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    infinite: true,
    focusOnSelect: false,
    appendDots: $('.dots'),
    prevArrow: $('.prev'),
    nextArrow: $('.next')
  });
});
$(document).ready(function () {
  //tabs
  $(function () {
    $("ul.js-tab-btn").on("click", "li:not(.active)", function () {
      $(this).addClass("active").siblings().removeClass("active").closest("div.js-tabs").find("div.js-tab-content").removeClass("active").eq($(this).index()).addClass("active");
    });
  });
  $('.js-tab-btn li a').click(function () {
    var selected = $(this).text();
    $('.select-text').text(selected);
  });
});
$(document).ready(function () {});