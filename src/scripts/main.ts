import { $ } from 'dom-utils-minimize';

document.addEventListener('DOMContentLoaded', () => {
	window.addEventListener('scroll', checkBoxes);

	checkBoxes();
	function checkBoxes() {
		const triggerBottom = (window.innerHeight / 5) * 4;

		$('.box')
			.get()
			.forEach((box) => {
				const boxTop = box.getBoundingClientRect().top;

				if (boxTop < triggerBottom) box.classList.add('show');
				else box.classList.remove('show');
			});
	}
});
