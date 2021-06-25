import { Arrow, Order, Tags } from '../utils/enums';
import { TypeOrder } from '../utils/types';

export const trTitle = document.createElement(Tags.TR);
trTitle.className = 'title-row';

const NUMBER_COLUMN = 8;
const arrClassListsTH = [
  'title-number',
  'title-category',
  'title-word',
  'title-translate',
  'title-train',
  'title-play',
  'title-errors',
  'title-percent',
];
const arrContentTH = [
  '№',
  'Category',
  'Word',
  'Translation',
  'Train',
  'Play',
  'Errors',
  'Percent',
];

export const renderTitleRow = (order: TypeOrder): void => {
  for (let i = 0; i < NUMBER_COLUMN; i++) {
    const th = document.createElement(Tags.TH);
    th.className = `${arrClassListsTH[i]} title-th ${order}`;
    th.innerHTML = `${arrContentTH[i]} <div class="div-th">${
      order === Order.DESC ? Arrow.DOWN : Arrow.UP
    }</div>`;
    trTitle.append(th);
  }
};
