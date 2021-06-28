import cards from '../cards';
import { renderCategory } from '../category/category';
import { fullCards } from '../control/obj-statistic';
import { objApp } from '../control/objs';
import { changeActiveLink } from '../handler/links-active';
import { input, label } from '../header/btn-sidebar';
import { renderStatistic } from '../statistic/render-statistic';
import { renderSubject } from '../subject/render';
import { overlay } from '../substrate/overlay';
import { addClassList } from '../utils/add-class';
import { checkClass } from '../utils/check-class';
import { CATEGORY } from '../utils/consts';
import { ElemClasses, NumberPage, Order } from '../utils/enums';
import { removeClassList } from '../utils/remove-class';
import { updateClassList } from '../utils/update-class';
import { list, menu, sidebar } from './sidebar';

const handlerMenu = (event: Event): void => {
  const target = event.target as HTMLElement;
  if (checkClass(target, ElemClasses.MENU_LINK)) {
    const index = list.indexOf(target.innerHTML);
    changeActiveLink(target);
    if (index === 0) {
      objApp.page = NumberPage.MAIN;
      renderCategory();
    } else if (index <= cards[CATEGORY].length) {
      objApp.page = index;
      renderSubject(objApp.page);
    } else {
      objApp.page = NumberPage.STATISTIC;
      renderStatistic(fullCards, Order.DESC);
    }
    closeSidebar();
  }
};

const handlerSideBar = (event: Event): void => {
  event.preventDefault();
  if (checkClass(sidebar, ElemClasses.HIDDEN)) {
    openSidebar();
  } else {
    closeSidebar();
  }
};

function openSidebar(): void {
  input.checked = true;
  updateClassList(label, sidebar, ElemClasses.HIDDEN);
  addClassList(overlay, ElemClasses.HIDDEN);
  addClassList(document.body, ElemClasses.HIDDEN);
  overlay.addEventListener('click', handlerSideBar);
  menu.addEventListener('click', handlerMenu);
}

function closeSidebar(): void {
  input.checked = false;
  updateClassList(sidebar, label, ElemClasses.HIDDEN);
  removeClassList(overlay, ElemClasses.HIDDEN);
  removeClassList(document.body, ElemClasses.HIDDEN);
  overlay.removeEventListener('click', handlerSideBar);
  menu.removeEventListener('click', handlerMenu);
}

label.addEventListener('click', handlerSideBar);
menu.addEventListener('click', handlerMenu);
