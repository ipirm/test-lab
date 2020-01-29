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