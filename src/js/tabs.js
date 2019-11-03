import {swiper1} from "../js/slider";
import {swiper2} from "../js/slider";

$('body').on('click', '.tab-nav_main', function () {

	$('.tab-nav_main').removeClass('active');
	$(this).addClass('active');
	var href = $(this).attr('href');
	$('.main-pane').removeClass('active').removeClass('in');
	$(href).addClass('active');
	swiper1.update();
	swiper2.update();
	setTimeout(function () {
		$(href).addClass('in');
	}, 200);

	return false;
});

$('body').on('click', '.inner-nav', function () {

	$('.inner-nav').removeClass('active');
	$(this).addClass('active');
	var href = $(this).attr('href');
	$('.inner-pane').removeClass('active').removeClass('in');
	$(href).addClass('active');
	swiper1.update();
	swiper2.update();
	setTimeout(function () {
		$(href).addClass('in');
	}, 200);

	return false;
});