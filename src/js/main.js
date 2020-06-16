window.addEventListener('DOMContentLoaded', () => {

'use strick';

let slideIndex = 1,
		slides = document.querySelectorAll('.header-box__bg'),
		linesWrap = document.querySelector('.header-line'),
		lines = document.querySelectorAll('.line_item'),
		titles = document.querySelectorAll('.header-title'),
		subtitles = document.querySelectorAll('.header-subtitle');

		showSlides(slideIndex);

		function showSlides(n) {

			if (n > slides.length) {
				slideIndex = 1;
			}
			if (n < 1) {
				slideIndex = slides.length;
			}

			titles.forEach((item) => item.style.display = 'none');
			subtitles.forEach((item) => item.style.display = 'none');
			slides.forEach((item) => item.style.display = 'none');
			lines.forEach((item) => item.classList.remove('active-slide'));

			titles[slideIndex - 1].style.display = 'block';
			subtitles[slideIndex - 1].style.display = 'block';
			slides[slideIndex - 1].style.display = 'block';
			lines[slideIndex - 1].classList.add('active-slide');

		}

		function currentSlide(n) {
			showSlides(slideIndex = n);
		}

		linesWrap.addEventListener('click', (event) => {
			for (let i = 0; i <= lines.length; i++) {
				if (event.target.classList.contains('line_item') && event.target == lines[i - 1]) {
					currentSlide(i);
				}
			}
		});

	new WOW().init();

});