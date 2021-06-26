import cards from '../cards';
import { objState } from '../control/objs';
import { input } from '../header/switcher';
import { addClassList } from '../utils/add-class';
import { ElemClasses, NumberPage, StateApp } from '../utils/enums';
import { getArrsElem } from '../utils/get-elems';
import { removeClassList } from '../utils/remove-class';

const switchState = () => {
  const elems = getArrsElem();
  if (input.checked === true) {
    objState.stateApp = StateApp.TRAIN;
    if (objState.page !== 0 && objState.page !== NumberPage.STATISTIC) {
      addClassList(elems.btnStartGame, ElemClasses.PLAY);
      for (let i = 0; i < cards[objState.page].length; i++) {
        removeClassList(elems.arrSvgs[i], ElemClasses.PLAY);
        removeClassList(elems.arrParags[i], ElemClasses.PLAY);
        removeClassList(elems.arrImages[i], ElemClasses.PLAY);
      }
    }
  } else {
    objState.stateApp = StateApp.PLAY;
    if (objState.page !== 0 && objState.page !== NumberPage.STATISTIC) {
      removeClassList(elems.btnStartGame, ElemClasses.PLAY);
      for (let i = 0; i < cards[objState.page].length; i++) {
        addClassList(elems.arrSvgs[i], ElemClasses.PLAY);
        addClassList(elems.arrParags[i], ElemClasses.PLAY);
        addClassList(elems.arrImages[i], ElemClasses.PLAY);
      }
    }
  }
};

input.addEventListener('click', switchState);
