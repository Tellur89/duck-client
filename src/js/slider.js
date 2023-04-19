// SLIDER
const slider = function () {
	const slides = document.querySelectorAll('.question');
	const btnNext = document.getElementById('.btn-next');
	const numberQuestions = document.getElementById('number-questions');

	let curSlide = 0;
	const maxSlide = slides.length;

	// const createDots = function () {
	// 	slides.forEach(function (_, i) {
	// 		dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`);
	// 	});
	// };

	// const activateDot = function (slide) {
	// 	document.querySelectorAll('.dots__dot').forEach((dot) => dot.classList.remove('dots__dot--active'));

	// 	document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
	// };

	const goToSlide = function (slide) {
		slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`));
	};

	const nextSlide = function () {
		curSlide === maxSlide - 1 ? (curSlide = 0) : curSlide++;
		goToSlide(curSlide);
	};

	// const prevSlide = function () {
	// 	if (curSlide === 0) {
	// 		curSlide = maxSlide - 1;
	// 	} else {
	// 		curSlide--;
	// 	}
	// 	goToSlide(curSlide);
	// 	activateDot(curSlide);
	// };

	const init = function () {
		goToSlide(curSlide);
	};

	init();
	setInterval(nextSlide, 2000);

	btnNext.addEventListener('click', nextSlide);

	document.addEventListener('keydown', function (e) {
		e.key === 'ArrowRight' && nextSlide();
	});

	// dotContainer.addEventListener('click', function (e) {
	// 	if (e.target.classList.contains('dots__dot')) {
	// 		const { slide } = e.target.dataset;
	// 		goToSlide(slide);
	// 		activateDot(slide);
	// 	}
	// });
};

slider();
