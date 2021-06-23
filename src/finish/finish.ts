import { renderCategory } from '../category/category';
import { objGame } from '../control/obj-game';
import { objState } from '../control/objs';
import { header } from '../header/header';
import { sound } from '../play/sound';
import { root } from '../root/root';
import { overlay } from '../substrate/overlay';
import { addClassList } from '../utils/add-class';
import { Tags } from '../utils/enums';
import { removeClassList } from '../utils/remove-class';

const ZERO_ERRORS = 0;
const TIME_SHOW_FINAL = 5000;

const removeFinal = () => {
  objGame.counterErrors = 0;
  removeClassList(root, 'hidden');
  removeClassList(overlay, 'winner');
  removeClassList(overlay, 'loser');
  overlay.innerHTML = '';
  removeClassList(document.body, 'hidden');
  removeClassList(header, 'hidden');
  objState.page = 0;
  renderCategory();
};

export const renderFinish = (): void => {
  addClassList(root, 'hidden');
  if (objGame.counterErrors === ZERO_ERRORS) {
    addClassList(overlay, 'winner');
    sound(`./audio/success.mp3`, 'second');
  } else {
    addClassList(overlay, 'loser');
    const plural = objGame.counterErrors === 1 ? 'error' : 'errors';
    const paragraf = document.createElement(Tags.P);
    paragraf.className = 'final-text';
    paragraf.innerHTML = `${objGame.counterErrors} ${plural}`;
    overlay.append(paragraf);
    sound(`./audio/failure.mp3`, 'second');
  }
  addClassList(document.body, 'hidden');
  addClassList(header, 'hidden');

  setTimeout(() => {
    removeFinal();
  }, TIME_SHOW_FINAL);
};
