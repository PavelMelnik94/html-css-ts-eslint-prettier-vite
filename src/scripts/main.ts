import { $ } from './_lib';
import { initTheme, toggleTheme } from './theme';

document.addEventListener('DOMContentLoaded', () => {
	initTheme();
	$('[data-button="toggle-theme"]').on('click', toggleTheme);

	const removeActiveClass = () => $('.panel').removeClass('active');

	$('.panel').on('click', (e: Event) => {
		removeActiveClass();
		if (e.currentTarget) (e.currentTarget as HTMLElement).classList.add('active');
	});
});
