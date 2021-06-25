import { fullCards } from '../control/obj-statistic';
import { objState } from '../control/objs';
import { root } from '../root/root';
import { Tags } from '../utils/enums';
import { mainStatistic } from './main';
import { table } from './table';
import { tbody } from './tbody';
import { renderTitleRow, trTitle } from './tr-title';

const cleareField = () => {
  root.innerHTML = '';
  tbody.innerHTML = '';
  table.innerHTML = '';
  trTitle.innerHTML = '';
  objState.countStatistic = 1;
};

export const renderStatistic = (): void => {
  cleareField();

  root.append(mainStatistic);
  mainStatistic.append(table);
  table.append(tbody);
  tbody.append(trTitle);
  renderTitleRow();

  for (let i = 0; i < fullCards.length; i++) {
    const row = document.createElement(Tags.TR);
    row.className = 'row';
    row.innerHTML += `
      <td class="cell">${i + 1}</td>
      <td class="cell cell-word">${fullCards[i].category}</td>
      <td class="cell cell-word">${fullCards[i].word}</td>
      <td class="cell cell-word">${fullCards[i].translation}</td>
      <td class="cell">${fullCards[i].train}</td>
      <td class="cell">${fullCards[i].answers}</td>
      <td class="cell">${fullCards[i].errors}</td>
      <td class="cell">${Math.round(fullCards[i].percent)}</td>
    `;
    tbody.append(row);
  }
};
