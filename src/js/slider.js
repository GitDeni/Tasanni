import Swiper from 'swiper';


var swiper1 = new Swiper ('.women-swiper', {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	simulateTouch: false,
	// lazy: {
	// 	loadPrevNext: true,
	// 	loadOnTransitionStart: true,
	// },
	breakpoints: {
		1024: {
			slidesPerView: 3,
			spaceBetween: 100,
		},
	},
	// Navigation arrows
	navigation: {
		nextEl: '.button-next-1',
		prevEl: '.button-prev-1',
	},
})

var swiper2 = new Swiper ('.men-swiper', {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	simulateTouch: false,
	// lazy: {
	// 	loadPrevNext: true,
	// 	loadOnTransitionStart: true,
	// },
	breakpoints: {
		1024: {
			slidesPerView: 3,
			spaceBetween: 100,
		},
	},
	// Navigation arrows
	navigation: {
		nextEl: '.button-next-2',
		prevEl: '.button-prev-2',
	},
})
export {swiper1, swiper2}