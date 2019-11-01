import Swiper from 'swiper';


var swiper1 = new Swiper ('.women-swiper', {
	slidesPerView: 3,
	spaceBetween: 30,
	loop: true,
	simulateTouch: false,
	lazy: {
		loadPrevNext: true,
		loadOnTransitionStart: true,
	},
	breakpoints: {
		1024: {
			slidesPerView: 1,
			spaceBetween: 100,
		},
	},
	// Navigation arrows
	navigation: {
		nextEl: '.button-next',
		prevEl: '.button-prev',
	},
})
export {swiper1}