/**
 * Утилита для работы с DOM элементами.
 * @param {string} selector - CSS селектор.
 * @param {ParentNode} [parent=document] - Родительский элемент для поиска.
 * @returns {Object} - Объект с методами для работы с элементами.
 * @example
 * $('.my-class')
 *   .addClass('new-class')
 *   .hide()
 *   .animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1000 });
 */

type Chainable = {
	/**
	 * Добавляет обработчик события для выбранных элементов
	 * @param {keyof HTMLElementEventMap} event - Тип события
	 * @param {(e: Event) => void} callback - Функция-обработчик
	 * @returns {Chainable}  Chainable - Цепочка методов
	 * @example $('.button').on('click', (e) => console.log('Клик!'))
	 */
	on: (event: keyof HTMLElementEventMap, callback: (e: Event) => void) => Chainable;

	/**
	 * Удаляет обработчик события для выбранных элементов
	 * @param {keyof HTMLElementEventMap} event - Тип события
	 * @param {(e: Event) => void} callback - Функция-обработчик
	 * @returns {Chainable}  Chainable - Цепочка методов
	 * @example $('.button').off('click', (e) => console.log('Клик!'))
	 */
	off: (event: keyof HTMLElementEventMap, callback: (e: Event) => void) => Chainable;

	/**
	 * Добавляет CSS класс к выбранным элементам
	 * @param {string} className - Имя класса
	 * @returns {Chainable} Chainable - Цепочка методов
	 * @example $('.element').addClass('active')
	 */
	addClass: (className: string) => Chainable;

	/**
	 * Удаляет CSS класс у выбранных элементов
	 * @param {string} className - Имя класса
	 * @returns {Chainable} Chainable - Цепочка методов
	 * @example $('.element').removeClass('active')
	 */
	removeClass: (className: string) => Chainable;

	/**
	 * Проверяет наличие класса у выбранных элементов
	 * @param {string} className - Имя класса
	 * @returns {boolean} Результат проверки
	 * @example const isClassActiveExist = $('.element').hasClass('active')
	 */
	hasClass: (className: string) => boolean;

	/**
	 * Скрывает выбранные элементы
	 * @returns {Chainable} Chainable - Цепочка методов
	 * @example $('.element').hide()
	 */
	hide: () => Chainable;

	/**
	 * Показывает выбранные элементы
	 * @returns {Chainable} Chainable - Цепочка методов
	 * @example $('.element').show()
	 */
	show: () => Chainable;

	/**
	 * Возвращает NodeList выбранных элементов
	 * @returns {NodeListOf<HTMLElement>} Список элементов/список с одним элементом(в зависимости от кол-ва эл.)
	 * @example const elements = $('.element').get()
	 */
	get: () => NodeListOf<HTMLElement>;

	/**
	 * Анимирует выбранные элементы
	 * @param {Keyframe[] | PropertyIndexedKeyframes | null} keyframes - Ключевые кадры анимации
	 * @param {number | KeyframeAnimationOptions} options - Настройки анимации
	 * @returns {Chainable} Chainable - Цепочка методов
	 * @example $('.element').animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1000 })
	 */
	animate: (
		keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
		options: number | KeyframeAnimationOptions,
	) => Chainable;

	/**
	 * Устанавливает CSS стили для выбранных элементов
	 * @param {Partial<CSSStyleDeclaration>} styles - Объект стилей
	 * @returns {Chainable} Chainable - Цепочка методов
	 * @example $('.element').css({ backgroundColor: 'red', fontSize: '16px' })
	 */
	css: (styles: Partial<CSSStyleDeclaration>) => Chainable;

	/**
	 * Устанавливает атрибуты для выбранных элементов
	 * @param {Record<string, string>} attributes - Объект атрибутов
	 * @returns {Chainable} Chainable - Цепочка методов
	 * @example $('.element').setAttributes({ 'data-id': '1', 'aria-label': 'Текст' })
	 */
	setAttributes: (attributes: Record<string, string>) => Chainable;

	/**
	 * Возвращает значение дата-аттрибута.
	 * @param {string} attrKey - ключ искомого дата-аттрибута.
	 * @returns {Chainable} string
	 * @example $('.element').getAttribute('id')
	 */
	getAttribute: (attrKey: string) => string | boolean;

	/**
	 * Проверяет наличие атрибута у выбранных элементов
	 * @param {string} attribute - Имя атрибута
	 * @returns {boolean} Результат проверки
	 * @example const isAttrExist = $('.element').hasAttribute('data-id')
	 */
	hasAttribute: (attribute: string) => boolean;

	/**
	 * Удаляет атрибуты у выбранных элементов
	 * @param {string[]} attributes - Массив имен атрибутов
	 * @returns {Chainable} Chainable - Цепочка методов
	 * @example $('.element').removeAttributes(['data-id', 'aria-label'])
	 */
	removeAttributes: (attributes: string[]) => Chainable;

	/**
	 * Устанавливает текстовое содержимое выбранных элементов
	 * @param {string} text - Текст
	 * @returns {Chainable} Chainable - Цепочка методов
	 * @example $('.element').setText('Новый текст')
	 */
	setText: (text: string) => Chainable;

	/**
	 * Устанавливает HTML содержимое выбранных элементов
	 * @param {string} html - HTML строка
	 * @returns {Chainable} Chainable - Цепочка методов
	 * @example $('.element').setHTML('<span>Новый HTML</span>')
	 */
	setHTML: (html: string) => Chainable;

	/**
	 * Переключает CSS класс у выбранных элементов
	 * @param {string} className - Имя класса
	 * @returns {Chainable} Chainable - Цепочка методов
	 * @example $('.element').toggleClass('active')
	 */
	toggleClass: (className: string) => Chainable;

	/**
	 * Плавно показывает выбранные элементы
	 * @param {number} duration - Длительность анимации
	 * @returns {Chainable} Chainable - Цепочка методов
	 * @example $('.element').fadeIn(500)
	 */
	fadeIn: (duration: number) => Chainable;

	/**
	 * Плавно скрывает выбранные элементы
	 * @param {number} duration - Длительность анимации
	 * @returns {Chainable} Chainable - Цепочка методов
	 * @example $('.element').fadeOut(500)
	 */
	fadeOut: (duration: number) => Chainable;

	/**
	 * Добавляет HTML в конец выбранных элементов
	 * @param {string} html - HTML строка
	 * @returns {Chainable} Chainable - Цепочка методов
	 * @example $('.element').append('<span>Новый HTML</span>')
	 */
	append: (html: string) => Chainable;

	/**
	 * Добавляет HTML в начало выбранных элементов
	 * @param {string} html - HTML строка
	 * @returns {Chainable} Chainable - Цепочка методов
	 * @example $('.element').prepend('<span>Новый HTML</span>')
	 * */
	prepend: (html: string) => Chainable;

	/**
	 * Удаляет выбранные элементы
	 * @returns {Chainable} Chainable - Цепочка методов
	 * @example $('.element').remove()
	 */
	remove: () => Chainable;


	/**
	 * Клонирует выбранные элементы
	 * @returns {Chainable} Chainable - Цепочка методов
	 * @example $('.element').cloneElement()
	 */
	cloneElement: () => Chainable;
};

export const $ = (this: any, selectorOrElement: string | HTMLElement, parent: ParentNode = document): Chainable => {
	let elements: NodeListOf<HTMLElement>;

	if (typeof selectorOrElement === 'string') {
		elements = parent.querySelectorAll(selectorOrElement);
	} else {
		elements = [selectorOrElement] as unknown as NodeListOf<HTMLElement>;
	}

	if (!elements?.length) {
		console.warn('Element(s) do not exist');
		return this;
	}

	return {
		on(event: string, callback: (e: Event) => void): Chainable {
			elements.forEach((el) => el.addEventListener(event, callback));
			return this;
		},
		off(event: string, callback: (e: Event) => void): Chainable {
			elements.forEach((el) => el.removeEventListener(event, callback));
			return this;
		},
		addClass(className: string): Chainable {
			elements.forEach((el) => el.classList.add(className));
			return this;
		},
		removeClass(className: string): Chainable {
			elements.forEach((el) => el.classList.remove(className));
			return this;
		},
		hasClass(className: string): boolean {
			return Array.from(elements).some((el) => el.classList.contains(className));
		},
		hide(): Chainable {
			elements.forEach((el) => {
				el.classList.add('visually-hidden');
			});
			return this;
		},
		show(): Chainable {
			elements.forEach((el) => {
				el.classList.remove('visually-hidden');
			});
			return this;
		},
		get(): NodeListOf<HTMLElement> {
			return elements;
		},
		animate(
			keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
			options: number | KeyframeAnimationOptions,
		): Chainable {
			elements.forEach((el) => el.animate(keyframes, options));
			return this;
		},
		css(styles: Partial<CSSStyleDeclaration>): Chainable {
			elements.forEach((el) => Object.assign(el.style, styles));
			return this;
		},
		setAttributes(attributes: Record<string, string>): Chainable {
			elements.forEach((el) => {
				Object.entries(attributes).forEach(([key, value]) => {
					el.setAttribute(key, value);
				});
			});
			return this;
		},
		getAttribute(attributeKey: string): string | boolean {
			return elements[0].getAttribute(attributeKey) || false;
		},
		hasAttribute(attribute: string): boolean {
			return Array.from(elements).some((el) => el.hasAttribute(attribute));
		},
		removeAttributes(attributes: string[]): Chainable {
			elements.forEach((el) => {
				attributes.forEach((attr) => el.removeAttribute(attr));
			});
			return this;
		},
		setText(text: string): Chainable {
			elements.forEach((el) => {
				el.textContent = text;
			});
			return this;
		},
		setHTML(html: string): Chainable {
			elements.forEach((el) => {
				el.innerHTML = html;
			});
			return this;
		},
		toggleClass(className: string): Chainable {
			elements.forEach((el) => el.classList.toggle(className));
			return this;
		},
		fadeIn(duration: number): Chainable {
			elements.forEach((el) => {
				el.style.transition = `opacity ${duration}ms`;
				el.style.opacity = '1';
			});
			return this;
		},
		fadeOut(duration: number): Chainable {
			elements.forEach((el) => {
				el.style.transition = `opacity ${duration}ms`;
				el.style.opacity = '0';
			});
			return this;
		},
		append(html: string): Chainable {
			elements.forEach((el) => {
				el.insertAdjacentHTML('beforeend', html);
			});
			return this;
		},
		prepend(html: string): Chainable {
			elements.forEach((el) => {
				el.insertAdjacentHTML('afterbegin', html);
			});
			return this;
		},
		remove(): Chainable {
			elements.forEach((el) => {
				el.parentNode?.removeChild(el);
			});
			return this;
		},
		cloneElement(): Chainable {
			elements.forEach((el) => {
				const clone = el.cloneNode(true) as HTMLElement;
				el.parentNode?.insertBefore(clone, el.nextSibling);
			});
			return this;
		},
	};
};
