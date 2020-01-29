$(document).ready(function () {

	//burger
	if(document.querySelector('.js-burger')){
		$('.js-burger').click(function(){
			if($(this).hasClass('active')){
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
		})
	}
});