// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

class BurgMenu {

	constructor(pointerElement){
		this.pointerElement = pointerElement
	}

	sayHi (hello) {
		console.log(hello)
	}

}

const burgSay = new BurgMenu(".bull")


const queryEl = document.querySelectorAll(".prices__card")
const queryElItem = queryEl[0].querySelectorAll(".prices__wrapper .prices__item")


burgSay.sayHi(queryEl)






function findVideos() {
    let videos = document.querySelectorAll('.video-frame');

    for (let i = 0; i < videos.length; i++) {
        setupVideo(videos[i]);
    }
}

function setupVideo(video) {
    let link = video.querySelector('.video-frame__link');
    let media = video.querySelector('.video-frame__media');
    let button = video.querySelector('.video-frame__button');
    let id = parseMediaURL(media);

    video.addEventListener('click', () => {
        let iframe = createIframe(id);

        link.remove();
        button.remove();
        video.appendChild(iframe);
    });

    link.removeAttribute('href');
    video.classList.add('video-frame--enabled');
}

function parseMediaURL(media) {
    let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
    let url = media.src;
    let match = url.match(regexp);

    return match[1];
}

function createIframe(id) {
    let iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', 'allowfullscreen');
    iframe.setAttribute('playsinline', 'true');
    iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('src', generateURL(id));
    iframe.classList.add('video-frame__media');

    return iframe;
}

function generateURL(id) {
    let query = '?rel=0&showinfo=0&autoplay=1';

    return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();