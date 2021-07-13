import { Tags } from '../utils/enums';
import { header } from './header';

const RELATIONS = 'menu__toggle';

export const btnSidebar = document.createElement(Tags.DIV);
btnSidebar.className = 'btn-sidebar';
header.append(btnSidebar);

export const input = document.createElement(Tags.INPUT);
input.id = RELATIONS;
input.className = 'menu__toggle-input'
input.type = 'checkbox';
btnSidebar.append(input);

export const label = document.createElement(Tags.LABEL);
label.className = 'menu__btn';
label.htmlFor = RELATIONS;
btnSidebar.append(label);

const span = document.createElement(Tags.SPAN);
label.append(span);
