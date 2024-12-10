import { $ } from './_lib';

document.addEventListener('DOMContentLoaded', () => {
	$('[data-button="open"]').on('click', () => $('.container').addClass('show-nav'));

	$('[data-button="close"]').on('click', () => $('.container').removeClass('show-nav'));
});
