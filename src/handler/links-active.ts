import { links } from '../sidebar/sidebar';
import { addClassList } from '../utils/add-class';

export const changeActiveLink = function changeNewActiveLink(
  newActiveLink: HTMLElement | number,
): void {
  for (let i = 0; i < links.length; i++) links[i].className = 'menu-link';
  if (typeof newActiveLink === 'number') {
    for (let i = 0; i < links.length; i++) {
      if (i === newActiveLink) {
        addClassList(links[i + 1], 'active');
      }
    }
  } else {
    addClassList(newActiveLink, 'active');
  }
};
