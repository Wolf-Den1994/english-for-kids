import cards from '../cards';
import { CATEGORY } from '../utils/consts';
import { Tags } from '../utils/enums';

let isFirstLink = true;

export const list: string[] = cards[CATEGORY].slice();
list.unshift('Main page');
list.push('Statistic');

export const sidebar = document.createElement(Tags.ASIDE);
sidebar.className = 'sidebar hidden';
document.body.append(sidebar);

export const menu = document.createElement(Tags.UL);
menu.className = 'menu';
sidebar.append(menu);

export const links: HTMLAnchorElement[] = [];

for (let i = 0; i < list.length; i++) {
  const link = document.createElement(Tags.LINK);
  link.className = 'menu-link';
  link.href = '#';
  link.innerHTML = `${list[i]}`;
  if (isFirstLink) {
    link.className = 'menu-link active';
    isFirstLink = false;
  }
  links.push(link);
  menu.append(link);
}
