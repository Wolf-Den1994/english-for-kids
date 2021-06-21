import cards from '../cards';
import { objState } from '../control/objs';
import { playSound } from '../play/sound';
import { root } from '../root/root';
import { renderSubject } from '../subject/render';
import { checkClass } from '../utils/check-class';
import { imgCategories } from '../utils/consts';
import { ElemClasses } from '../utils/enums';
import { ICards } from '../utils/interfaces';

const categotySelection = function chooseOneOfCategory(event: Event) {
  const img = event.target as HTMLImageElement;
  const imageSrc = img.src;
  const firstPart = imageSrc.split('/img/').pop() as string;
  const lastPart = firstPart.split('.').shift() as string;
  if (checkClass(img, ElemClasses.IMG_CATEGORY)) {
    const index = imgCategories.indexOf(lastPart);
    objState.page = index;
    renderSubject(index);
  } else {
    const page = cards[objState.page + 1] as ICards[];
    playSound(page, lastPart);
  }
};

root.addEventListener('click', categotySelection);
