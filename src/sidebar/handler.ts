import { input, label } from '../header/btn-sidebar';
import { overlay } from '../substrate/overlay';
import { addClassList } from '../utils/add-class';
import { checkClass } from '../utils/check-class';
import { ElemClasses } from '../utils/enums';
import { removeClassList } from '../utils/remove-class';
import { updateClassList } from '../utils/update-class';
import { sidebar } from './sidebar';

const handlerSideBar = function openOrCloseSideBar(event: Event) {
  event.preventDefault();
  if (checkClass(sidebar, ElemClasses.HIDDEN)) {
    input.checked = true;
    updateClassList(label, sidebar, ElemClasses.HIDDEN);
    addClassList(overlay, ElemClasses.HIDDEN);
    addClassList(document.body, ElemClasses.HIDDEN);
  } else {
    input.checked = false;
    updateClassList(sidebar, label, ElemClasses.HIDDEN);
    removeClassList(overlay, ElemClasses.HIDDEN);
    removeClassList(document.body, ElemClasses.HIDDEN);
  }
};

label.addEventListener('click', handlerSideBar);
overlay.addEventListener('click', handlerSideBar);
