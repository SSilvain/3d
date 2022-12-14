/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, EffectCreative } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.swiper-work')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper-work', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-work-button-prev',
				nextEl: '.swiper-work-button-next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.swiper-product')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper-product', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, EffectCreative],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,
			effect: "creative",
			creativeEffect: {
				perspective: true,
				prev: {
					// will set `translateZ(-400px)` on previous slides
					translate: ['-100%', 0, -400],
				},
				next: {
					// will set `translateX(100%)` on next slides
					translate: ['80%', 0, -400],
					scale: .6,
					opacity: .5,
				},
				limitProgress: 2,
				// perspective: true,
			},
			// slidesPerGroup: 1,

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-product-button-prev',
				nextEl: '.swiper-product-button-next',
			},

			// Брейкпоинты

			breakpoints: {
				320: {
				},
				768: {
					pagination: {
						el: ".swiper-pagination",
						type: "fraction",
					},
				},
				992: {
					pagination: {
						el: ".swiper-pagination",
						type: "fraction",
					},
				},
				1268: {
					pagination: {
						el: ".swiper-pagination",
						type: "fraction",
					},
				},
			},

			// События
			on: {

			}
		});
	}
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.swiper-package')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper-package', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, EffectCreative],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,
			effect: "creative",
			creativeEffect: {
				perspective: true,
				prev: {
					// will set `translateZ(-400px)` on previous slides
					translate: ['-100%', 0, -400],
				},
				next: {
					// will set `translateX(100%)` on next slides
					translate: ['80%', 0, -400],
					scale: .6,
					opacity: .5,
				},
				limitProgress: 2,
				// perspective: true,
			},
			// slidesPerGroup: 1,

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-package-button-prev',
				nextEl: '.swiper-package-button-next',
			},

			// Брейкпоинты

			breakpoints: {
				320: {
				},
				768: {
					pagination: {
						el: ".swiper-package-pagination",
						type: "fraction",
					},
				},
				992: {
					pagination: {
						el: ".swiper-package-pagination",
						type: "fraction",
					},
				},
				1268: {
					pagination: {
						el: ".swiper-package-pagination",
						type: "fraction",
					},
				},
			},

			// События
			on: {

			}
		});
	}
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.swiper2')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper2', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 2,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.swiper-pro-3d')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper-pro-3d', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-pro-3d-button-prev',
				nextEl: '.swiper-pro-3d-button-next',
			},

			// Брейкпоинты
			breakpoints: {
				320: {
					slidesPerView: 1,
					// spaceBetween: 0,
					// autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					// spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					// spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					// spaceBetween: 30,
				},
			},
			// События
			on: {

			}
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});