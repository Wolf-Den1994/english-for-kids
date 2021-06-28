import { fullCards } from '../control/obj-statistic';
import { objApp } from '../control/objs';
import { root } from '../root/root';
import { cleanField, render } from '../subject/render';
import { NumberPage, Tags } from '../utils/enums';
import { IFullCars } from '../utils/interfaces';

export const copyFullCards: IFullCars[] = [];
export const arrDifficultWord: IFullCars[] = [];
const NUMBER_CARDS_DISPLAYED = 8;

export const renderTrainDifficult = (): void => {
  copyFullCards.length = 0;
  arrDifficultWord.length = 0;
  let count = 0;
  copyFullCards.push(...fullCards.slice());

  copyFullCards.sort((a, b) => (a.errors > b.errors ? -1 : 1));
  copyFullCards.forEach((item) => {
    if (item.errors > 0 && count !== NUMBER_CARDS_DISPLAYED) {
      arrDifficultWord.push(item);
      count++;
    }
  });

  objApp.page = NumberPage.DIFFICULT;
  cleanField();

  if (count > 0) {
    render('difficult', NumberPage.DIFFICULT, arrDifficultWord);
  } else {
    const diffDiv = document.createElement(Tags.DIV);
    diffDiv.className = 'diff';
    root.append(diffDiv);

    const empryDiv = document.createElement(Tags.DIV);
    empryDiv.className = 'empry';
    diffDiv.append(empryDiv);
  }
};
