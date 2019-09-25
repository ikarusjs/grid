export interface CustomElementConfig {
	selector: string;
	template: string;
	styles?: string[];
}

export const CustomElement = (config: CustomElementConfig) => (target: any) => {

	const connectedCallback = target.prototype.connectedCallback || function () { };
	const template = document.createElement('template');

	if (config.styles) {
		template.innerHTML = `<style>\n${config.styles.join('')}\n</style>`;
	}

	template.innerHTML += (config.template || '');


	target.prototype.connectedCallback = function () {

		const nodeContent = document.importNode(template.content, true);

		this.attachShadow({ mode: 'open' }).appendChild(nodeContent);

		connectedCallback.call(this);

	};

	window.customElements.define(config.selector, target);

}