import { $ } from './_lib';

document.addEventListener('DOMContentLoaded', () => {
	$('.btn').on('click', () => {
		$('.search').hasClass('active')
			? $('.search').removeClass('active')
			: $('.search').addClass('active');
	});
});
