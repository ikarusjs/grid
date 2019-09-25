export class IkarusRow extends HTMLElement {

  _template: any = document.createElement('template');

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._setTemplate();
    (this.shadowRoot as any).appendChild(this._template.content.cloneNode(true));
  }

  _setTemplate(){
    this._template.innerHTML = `<slot></slot>`;
  }
}

window.customElements.define('ik-row', IkarusRow);
