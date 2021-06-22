import cards from '../cards';
import { CATEGORY } from '../utils/consts';
import { Tags } from '../utils/enums';

export const list: string[] = cards[CATEGORY].slice();
list.unshift('Main page');

export const sidebar = document.createElement(Tags.ASIDE);
sidebar.className = 'sidebar hidden';
document.body.append(sidebar);

export const menu = document.createElement(Tags.UL);
menu.className = 'menu';
sidebar.append(menu);

for (let i = 0; i < list.length; i++) {
  const link = document.createElement(Tags.LINK);
  link.className = 'menu-link';
  link.href = '#';
  link.innerHTML = `${list[i]}`;
  menu.append(link);
}
