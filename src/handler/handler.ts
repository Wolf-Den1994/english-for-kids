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

const getWord = function getWordForIndex(div: HTMLDivElement): string {
  const img = div.children[0] as HTMLImageElement;
  const imageSrc = img.src;
  const firstPart = imageSrc.split('/img/').pop() as string;
  const lastPart = firstPart.split('.').shift() as string;
  return lastPart;
};

const categotySelection = function chooseOneOfCategory(event: Event) {
  const elem = event.target as HTMLElement;
  const card = elem.closest(`.${ElemClasses.MAIN_CARD}`) as HTMLDivElement;
  const front = elem.closest(`.${ElemClasses.FRONT}`) as HTMLDivElement;
  if (card) {
    const parent = card.parentElement as HTMLDivElement;
    if (parent.classList.contains('category')) {
      const word: string = getWord(card);
      const index = imgCategories.indexOf(word);
      objState.page = index;
      renderSubject(index);
    } else if (
      parent.classList.contains('subject') &&
      !checkClass(elem, ElemClasses.SVG) &&
      !checkClass(card, ElemClasses.HOVER)
    ) {
      if (front) {
        const word: string = getWord(front);
        const page = cards[objState.page + 1] as ICards[];
        playSound(page, word);
      }
    } else if (checkClass(elem, ElemClasses.SVG)) {
      addClassList(card, ElemClasses.HOVER);

      const flipBack = function flipBackCard() {
        removeClassList(card, ElemClasses.HOVER);
        card.removeEventListener('mouseleave', flipBack);
      };

      card.addEventListener('mouseleave', flipBack);
    }
  }
};

root.addEventListener('click', categotySelection);
