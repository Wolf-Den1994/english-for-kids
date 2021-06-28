import cards from '../cards';
import { objGame } from '../control/obj-game';
import { objState } from '../control/objs';
import { input } from '../header/switcher';
import { store } from '../store/store';
import { addClassList } from '../utils/add-class';
import { changeClassList } from '../utils/change-class';
import { ElemClasses, NumberPage, StateApp } from '../utils/enums';
import { getArrsElem } from '../utils/get-elems';
import { removeClassList } from '../utils/remove-class';

const switchState = () => {
  const elems = getArrsElem();
  if (input.checked === true) {
    store.getState().value = StateApp.TRAIN;
    if (
      objState.page !== NumberPage.MAIN &&
      objState.page !== NumberPage.STATISTIC
    ) {
      elems.score.innerHTML = '';
      objGame.counterErrors = 0;
      addClassList(elems.btnStartGame, ElemClasses.PLAY);
      changeClassList(
        elems.btnStartGame,
        ElemClasses.REPEAT,
        ElemClasses.BTN_START_GAME,
      );
      for (let i = 0; i < cards[objState.page].length; i++) {
        removeClassList(elems.arrSvgs[i], ElemClasses.PLAY);
        removeClassList(elems.arrParags[i], ElemClasses.PLAY);
        removeClassList(elems.arrImages[i], ElemClasses.PLAY);
        removeClassList(elems.arrImages[i], ElemClasses.GREAT);
      }
    }
  } else {
    store.getState().value = StateApp.PLAY;
    if (
      objState.page !== NumberPage.MAIN &&
      objState.page !== NumberPage.STATISTIC
    ) {
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
