import cards from '../cards';
import { objState } from '../control/objs';
import { input } from '../header/switcher';
import { addClassList } from '../utils/add-class';
import { getArrsElem } from '../utils/get-elems';
import { removeClassList } from '../utils/remove-class';

const switchState = () => {
  const arrsElems = getArrsElem();
  // console.log(arrsElems)
  // console.log(arrsElems.arrSvgs);
  if (input.checked === true) {
    objState.stateApp = 'train';
    // console.log(objState.page)
    if (objState.page !== 0) {
      for (let i = 0; i < cards[objState.page].length; i++) {
        removeClassList(arrsElems.arrSvgs[i], 'play');
        removeClassList(arrsElems.arrParags[i], 'play');
        removeClassList(arrsElems.arrImages[i], 'play');
      }
    }
    // arrsElems.arrSvgs.length = 0;
    // arrsElems.arrParags.length = 0;
    // arrsElems.arrImages.length = 0;
  } else {
    objState.stateApp = 'play';
    if (objState.page !== 0) {
      for (let i = 0; i < cards[objState.page].length; i++) {
        addClassList(arrsElems.arrSvgs[i], 'play');
        addClassList(arrsElems.arrParags[i], 'play');
        addClassList(arrsElems.arrImages[i], 'play');
      }
    }
  }
};

input.addEventListener('click', switchState);
