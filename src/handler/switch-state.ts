import cards from '../cards';
import { objState } from '../control/objs';
import { input } from '../header/switcher';
import { arrImages, arrParags, arrSvgs } from '../subject/render';
import { addClassList } from '../utils/add-class';
import { removeClassList } from '../utils/remove-class';

const switchState = function switchStateApp() {
  if (input.checked === true) {
    objState.stateApp = 'train';
    // console.log(cards[objState.page].length);
    for (let i = 0; i < cards[objState.page].length; i++) {
      removeClassList(arrSvgs[i], 'play');
      removeClassList(arrParags[i], 'play');
      removeClassList(arrImages[i], 'play');
    }
  } else {
    objState.stateApp = 'play';
    // console.log(cards[objState.page].length);
    for (let i = 0; i < cards[objState.page].length; i++) {
      addClassList(arrSvgs[i], 'play');
      addClassList(arrParags[i], 'play');
      addClassList(arrImages[i], 'play');
    }
  }
};

input.addEventListener('click', switchState);
