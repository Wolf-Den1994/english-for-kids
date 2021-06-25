import { Arrow, Tags } from '../utils/enums';

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

export const renderTitleRow = (): void => {
  for (let i = 0; i < NUMBER_COLUMN; i++) {
    const th = document.createElement(Tags.TH);
    th.className = arrClassListsTH[i];
    th.innerHTML = `${arrContentTH[i]} <div class="div-th">${Arrow.DOWN}</div>`;
    trTitle.append(th);
  }
};