import cards from '../cards';
import { CATEGORY } from '../utils/consts';
import { ICards, IFullCars } from '../utils/interfaces';

export const fullCards: IFullCars[] = [];
const infoLocal = localStorage.getItem('info');
if (infoLocal) {
  fullCards.push(...JSON.parse(infoLocal));
} else {
  for (let i = 1; i < cards.length; i++) {
    cards[i].forEach((elem: string | ICards) => {
      if (typeof elem === 'object') {
        fullCards.push({
          category: cards[CATEGORY][i - 1],
          word: elem.word,
          translation: elem.translation,
          train: 0,
          play: 0,
          errors: 0,
          answers: 0,
          percent: 0,
        });
      }
    });
  }
}

export const dispatchInfo = (info: IFullCars[]): void => {
  localStorage.setItem('info', JSON.stringify(info));
};
dispatchInfo(fullCards);
