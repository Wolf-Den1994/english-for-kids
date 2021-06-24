import cards from '../cards';
import { objStatistic } from '../control/obj-statistic';
import { root } from '../root/root';
import { CATEGORY } from '../utils/consts';
import { Tags } from '../utils/enums';
import { ICards } from '../utils/interfaces';
import { mainStatistic } from './main';
import { table } from './table';
import { tbody } from './tbody';
import { renderTitleRow, trTitle } from './tr-title';

const cleareField = () => {
  root.innerHTML = '';
  tbody.innerHTML = '';
  table.innerHTML = '';
  trTitle.innerHTML = '';
  objStatistic.count = 1;
};

export const renderStatistic = (): void => {
  cleareField();

  root.append(mainStatistic);
  mainStatistic.append(table);
  table.append(tbody);
  tbody.append(trTitle);
  renderTitleRow();

  for (let i = 1; i <= cards[CATEGORY].length; i++) {
    cards[i].forEach((elem: string | ICards) => {
      if (typeof elem === 'object') {
        const row = document.createElement(Tags.TR);
        row.className = 'row';
        row.innerHTML += `
          <td class="cell">${objStatistic.count}</td>
          <td class="cell">${cards[CATEGORY][i - 1]}</td>
          <td class="cell">${elem.word}</td>
          <td class="cell">${elem.translation}</td>
          <td class="cell">${0}</td>
          <td class="cell">${0}</td>
          <td class="cell">${0}</td>
          <td class="cell">${0}</td>
        `;
        tbody.append(row);
      }
      objStatistic.count++;
    });
  }
};
