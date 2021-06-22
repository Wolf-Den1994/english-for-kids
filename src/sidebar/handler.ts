import { renderCategory } from '../category/category';
import { objState } from '../control/objs';
import { input, label } from '../header/btn-sidebar';
import { renderSubject } from '../subject/render';
import { overlay } from '../substrate/overlay';
import { addClassList } from '../utils/add-class';
import { checkClass } from '../utils/check-class';
import { ElemClasses } from '../utils/enums';
import { removeClassList } from '../utils/remove-class';
import { updateClassList } from '../utils/update-class';
import { links, list, menu, sidebar } from './sidebar';

const handlerMenu = function handlerMenuSidebar(event: Event) {
  const target = event.target as HTMLElement;
  if (checkClass(target, 'menu-link')) {
    const index = list.indexOf(target.innerHTML);
    for (let i = 0; i < links.length; i++) links[i].className = 'menu-link';
    addClassList(target, 'active');
    if (index === 0) {
      objState.page = 0;
      renderCategory();
    } else {
      objState.page = index - 1;
      renderSubject(objState.page);
    }
  }
};

const handlerSideBar = function openOrCloseSideBar(event: Event) {
  event.preventDefault();
  if (checkClass(sidebar, ElemClasses.HIDDEN)) {
    input.checked = true;
    updateClassList(label, sidebar, ElemClasses.HIDDEN);
    addClassList(overlay, ElemClasses.HIDDEN);
    addClassList(document.body, ElemClasses.HIDDEN);
    overlay.addEventListener('click', handlerSideBar);
    menu.addEventListener('click', handlerMenu);
  } else {
    input.checked = false;
    updateClassList(sidebar, label, ElemClasses.HIDDEN);
    removeClassList(overlay, ElemClasses.HIDDEN);
    removeClassList(document.body, ElemClasses.HIDDEN);
    overlay.removeEventListener('click', handlerSideBar);
    menu.removeEventListener('click', handlerMenu);
  }
};

label.addEventListener('click', handlerSideBar);
menu.addEventListener('click', handlerMenu);
