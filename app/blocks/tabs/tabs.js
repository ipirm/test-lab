$(document).ready(function () {

	//tabs
	$(function() {
		$("ul.js-tab-btn").on("click", "li:not(.active)", function() {
			$(this)
			.addClass("active")
			.siblings()
			.removeClass("active")
			.closest("div.js-tabs")
			.find("div.js-tab-content")
			.removeClass("active")
			.eq($(this).index())
			.addClass("active");
		});
	});

	$('.js-tab-btn li a').click( function () {
		var selected = $(this).text();
		$('.select-text').text(selected);
	});

});