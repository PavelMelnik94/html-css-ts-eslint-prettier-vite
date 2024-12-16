import { $ } from 'dom-utils-minimize';
document.addEventListener('DOMContentLoaded', () => {
	// eslint-disable-next-line no-console
	$('.button').on('click', (_e) => console.log('Клик!'));
});
