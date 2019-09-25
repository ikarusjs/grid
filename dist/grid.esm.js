class IkarusRow extends HTMLElement {
    constructor() {
        super();
        this._template = document.createElement('template');
        this.attachShadow({ mode: 'open' });
        this._setTemplate();
        this.shadowRoot.appendChild(this._template.content.cloneNode(true));
    }
    _setTemplate() {
        this._template.innerHTML = `<slot></slot>`;
    }
}
window.customElements.define('ik-row', IkarusRow);

const a = {};

export { IkarusRow, a };
