import { CustomElement } from '../core/custom-element';
import html from './row.html';
import scss from './row.scss';

@CustomElement({
  selector: 'ik-row',
  template: html,
  styles: [scss]
})
export class IkarusRow extends HTMLElement {

}
