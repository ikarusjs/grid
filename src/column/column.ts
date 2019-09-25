import { CustomElement } from '../core/custom-element';
import html from './column.html';
import scss from './column.scss';

@CustomElement({
  selector: 'ik-column',
  template: html,
  styles: [scss]
})
export class IkarusColumn extends HTMLElement {

}
