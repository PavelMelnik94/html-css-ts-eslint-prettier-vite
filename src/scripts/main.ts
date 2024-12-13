import {$} from "./_lib.ts";

document.addEventListener('DOMContentLoaded', () => {

	let load = 0;

	let int = setInterval(blurring, 30);
	function blurring() {
		load++;
		if (load > 99) {
			clearInterval(int);
		}
		$('.loading-text').setText(`${load}%`).css({opacity: `${1 - load / 100}`})
		$('.bg').css({filter: `blur(${100 - load}px)`});
	}
});
