import cards from '../cards';
import { objState } from '../control/objs';
import { gameProcess, startGame } from '../play/game';
import { playSound } from '../play/sound';
import { root } from '../root/root';
import { renderSubject } from '../subject/render';
import { addClassList } from '../utils/add-class';
import { checkClass } from '../utils/check-class';
import { imgCategories } from '../utils/consts';
import { ElemClasses } from '../utils/enums';
import { getArrsElem } from '../utils/get-elems';
import { getWord } from '../utils/get-word';
import { ICards } from '../utils/interfaces';
import { removeClassList } from '../utils/remove-class';
import { changeActiveLink } from './links-active';

const checkClasses = (
  parent: HTMLDivElement,
  elem: HTMLElement,
  card: HTMLDivElement,
): boolean => {
  if (
    checkClass(parent, 'subject') &&
    !checkClass(elem, ElemClasses.SVG) &&
    !checkClass(card, ElemClasses.HOVER)
  ) {
    return true;
  }
  return false;
};

const addListener = (card: HTMLDivElement) => {
  const flipBack = function flipBackCard() {
    removeClassList(card, ElemClasses.HOVER);
    card.removeEventListener('mouseleave', flipBack);
  };
  card.addEventListener('mouseleave', flipBack);
};

const categotySelection = (card: HTMLDivElement) => {
  const word: string = getWord(card);
  const index = imgCategories.indexOf(word) + 1;
  objState.page = index;
  changeActiveLink(index);
  renderSubject(index);
};

const workWithCards = (
  elem: HTMLElement,
  card: HTMLDivElement,
  front: HTMLDivElement,
) => {
  if (card) {
    const parent = card.parentElement as HTMLDivElement;
    if (checkClass(parent, 'category')) {
      categotySelection(card);
    } else if (checkClasses(parent, elem, card)) {
      if (front) {
        const word: string = getWord(front);
        const page = cards[objState.page] as ICards[];
        // console.log(page)
        playSound(page, word);
      }
    } else if (checkClass(elem, ElemClasses.SVG)) {
      addClassList(card, ElemClasses.HOVER);
      addListener(card);
    }
  }
};

const selectionCard = (event: Event) => {
  const elems = getArrsElem();
  const elem = event.target as HTMLElement;
  const card = elem.closest(`.${ElemClasses.MAIN_CARD}`) as HTMLDivElement;
  const front = elem.closest(`.${ElemClasses.FRONT}`) as HTMLDivElement;
  if (objState.stateApp === 'train') {
    workWithCards(elem, card, front);
  } else if (objState.page === 0) {
    categotySelection(card);
  } else if (checkClass(elem, 'btn-start-game')) {
    startGame(elem);
  } else if (
    checkClass(elem, 'img') &&
    !checkClass(elems.btnStartGame, 'btn-start-game')
  ) {
    gameProcess(elem);
  }
};

root.addEventListener('click', selectionCard);
