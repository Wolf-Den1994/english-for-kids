import cards from '../cards';
import { objState } from '../control/objs';
import { input } from '../header/switcher';
import { addClassList } from '../utils/add-class';
import { getArrsElem } from '../utils/get-elems';
import { removeClassList } from '../utils/remove-class';

const switchState = () => {
  const elems = getArrsElem();
  if (input.checked === true) {
    objState.stateApp = 'train';
    if (objState.page !== 0) {
      addClassList(elems.btnStartGame, 'play');
      for (let i = 0; i < cards[objState.page].length; i++) {
        removeClassList(elems.arrSvgs[i], 'play');
        removeClassList(elems.arrParags[i], 'play');
        removeClassList(elems.arrImages[i], 'play');
      }
    }
  } else {
    objState.stateApp = 'play';
    if (objState.page !== 0) {
      removeClassList(elems.btnStartGame, 'play');
      for (let i = 0; i < cards[objState.page].length; i++) {
        addClassList(elems.arrSvgs[i], 'play');
        addClassList(elems.arrParags[i], 'play');
        addClassList(elems.arrImages[i], 'play');
      }
    }
  }
};

input.addEventListener('click', switchState);
