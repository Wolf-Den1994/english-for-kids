import cards from '../cards';
import { objGame } from '../control/obj-game';
import { dispatchInfo, fullCards } from '../control/obj-statistic';
import { objState } from '../control/objs';
import { gameProcess, startGame } from '../play/game';
import { playSound, sound } from '../play/sound';
import { root } from '../root/root';
import { resetStatistic } from '../statistic/reset';
import { sortStatistic } from '../statistic/sort';
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
        fullCards.forEach((item) => {
          if (item.word === word) {
            item.train++;
          }
        });
        dispatchInfo(fullCards);
        playSound(page, word);
      }
    } else if (checkClass(elem, ElemClasses.SVG)) {
      addClassList(card, ElemClasses.HOVER);
      addListener(card);
    }
  }
};

const workWithStatistic = (
  elem: HTMLElement,
  title: HTMLTableHeaderCellElement,
) => {
  if (title) {
    // console.log('sort')
    sortStatistic(title);
  } else if (checkClass(elem, 'btn-reset')) {
    resetStatistic();
  }
};

const selectionHandler = (event: Event) => {
  // console.log(event);
  const elems = getArrsElem();
  const elem = event.target as HTMLElement;
  const card = elem.closest(`.${ElemClasses.MAIN_CARD}`) as HTMLDivElement;
  const front = elem.closest(`.${ElemClasses.FRONT}`) as HTMLDivElement;
  const titleTh = elem.closest('.title-th') as HTMLTableHeaderCellElement;
  if (objState.stateApp === 'train') {
    workWithCards(elem, card, front);
    if (objState.page === 9) {
      workWithStatistic(elem, titleTh);
    }
  } else if (objState.page === 0) {
    categotySelection(card);
  } else if (objState.page === 9) {
    workWithStatistic(elem, titleTh);
  } else if (checkClass(elem, 'btn-start-game')) {
    startGame(elem);
  } else if (checkClass(elem, 'repeat')) {
    if (objGame.arrAudios.length > 0) {
      sound(objGame.arrAudios[0], 'first');
    }
  } else if (
    checkClass(elem, 'img') &&
    !checkClass(elems.btnStartGame, 'btn-start-game') &&
    !checkClass(elem, 'great')
  ) {
    gameProcess(elem);
  }
};

root.addEventListener('click', selectionHandler);
