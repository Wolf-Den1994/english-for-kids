import cards from '../cards';
import { objState } from '../control/objs';
import { playSound } from '../play/sound';
import { root } from '../root/root';
import { renderSubject } from '../subject/render';
import { addClassList } from '../utils/add-class';
import { checkClass } from '../utils/check-class';
import { imgCategories } from '../utils/consts';
import { ElemClasses } from '../utils/enums';
import { ICards } from '../utils/interfaces';
import { removeClassList } from '../utils/remove-class';
import { changeActiveLink } from './links-active';

const getWord = function getWordForIndex(div: HTMLDivElement): string {
  const img = div.children[0] as HTMLImageElement;
  const imageSrc = img.src;
  const firstPart = imageSrc.split('/img/').pop() as string;
  const lastPart = firstPart.split('.').shift() as string;
  return lastPart;
};

const checkClasses = function checkClassesAtElems(
  parent: HTMLDivElement,
  elem: HTMLElement,
  card: HTMLDivElement,
) {
  if (
    checkClass(parent, 'subject') &&
    !checkClass(elem, ElemClasses.SVG) &&
    !checkClass(card, ElemClasses.HOVER)
  ) {
    return true;
  }
  return false;
};

const addListener = function addListenerOnCard(card: HTMLDivElement) {
  const flipBack = function flipBackCard() {
    removeClassList(card, ElemClasses.HOVER);
    card.removeEventListener('mouseleave', flipBack);
  };
  card.addEventListener('mouseleave', flipBack);
};

const workWithCards = function workWithSelectionCard(
  elem: HTMLElement,
  card: HTMLDivElement,
  front: HTMLDivElement,
) {
  if (card) {
    const parent = card.parentElement as HTMLDivElement;
    if (checkClass(parent, 'category')) {
      const word: string = getWord(card);
      const index = imgCategories.indexOf(word);
      objState.page = index;
      changeActiveLink(index);
      renderSubject(index);
    } else if (checkClasses(parent, elem, card)) {
      if (front) {
        const word: string = getWord(front);
        const page = cards[objState.page + 1] as ICards[];
        playSound(page, word);
      }
    } else if (checkClass(elem, ElemClasses.SVG)) {
      addClassList(card, ElemClasses.HOVER);
      addListener(card);
    }
  }
};

const categotySelection = function chooseOneOfCategory(event: Event) {
  const elem = event.target as HTMLElement;
  const card = elem.closest(`.${ElemClasses.MAIN_CARD}`) as HTMLDivElement;
  const front = elem.closest(`.${ElemClasses.FRONT}`) as HTMLDivElement;
  if (objState.stateApp === 'train') {
    workWithCards(elem, card, front);
  } else {
    // console.log('need btn start');
  }
};

root.addEventListener('click', categotySelection);
