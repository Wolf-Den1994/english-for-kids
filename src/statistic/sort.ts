import { fullCards } from '../control/obj-statistic';
import { checkClass } from '../utils/check-class';
import { Order } from '../utils/enums';
import { IFullCars } from '../utils/interfaces';
import { TypeOrder } from '../utils/types';
import { renderStatistic } from './render-statistic';

export const sortCards: IFullCars[] = [];

function sortByTitle(arr: IFullCars[], arg: keyof IFullCars, order: TypeOrder) {
  if (order === Order.ASC) {
    arr.sort((a, b) => (a[arg] > b[arg] ? 1 : -1));
  } else {
    arr.sort((a, b) => (a[arg] > b[arg] ? -1 : 1));
  }
}

export const sortStatistic = (title: HTMLTableHeaderCellElement): void => {
  sortCards.length = 0;
  const newFullCards = fullCards.slice();
  // можно не создавать newFullCards и записывать сразу
  // fullCards тогда результат будет сохранятся всегда
  // console.log('sort');

  if (checkClass(title, 'title-number')) {
    if (checkClass(title, Order.DESC)) {
      sortByTitle(newFullCards, 'number', Order.DESC);
      sortCards.push(...newFullCards);
      renderStatistic(sortCards, Order.ASC);
    } else {
      sortByTitle(newFullCards, 'number', Order.ASC);
      sortCards.push(...newFullCards);
      renderStatistic(sortCards, Order.DESC);
    }
  } else if (checkClass(title, 'title-category')) {
    if (checkClass(title, Order.DESC)) {
      // console.log('desc');
      sortByTitle(newFullCards, 'category', Order.DESC);
      sortCards.push(...newFullCards);
      renderStatistic(sortCards, Order.ASC);
      // console.log(title.children[0].innerHTML);
    } else {
      // console.log('asc');
      sortByTitle(newFullCards, 'category', Order.ASC);
      sortCards.push(...newFullCards);
      renderStatistic(sortCards, Order.DESC);
    }
  } else if (checkClass(title, 'title-word')) {
    if (checkClass(title, Order.DESC)) {
      sortByTitle(newFullCards, 'word', Order.DESC);
      sortCards.push(...newFullCards);
      renderStatistic(sortCards, Order.ASC);
    } else {
      sortByTitle(newFullCards, 'word', Order.ASC);
      sortCards.push(...newFullCards);
      renderStatistic(sortCards, Order.DESC);
    }
  } else if (checkClass(title, 'title-translate')) {
    if (checkClass(title, Order.DESC)) {
      sortByTitle(newFullCards, 'translation', Order.DESC);
      sortCards.push(...newFullCards);
      renderStatistic(sortCards, Order.ASC);
    } else {
      sortByTitle(newFullCards, 'translation', Order.ASC);
      sortCards.push(...newFullCards);
      renderStatistic(sortCards, Order.DESC);
    }
  } else if (checkClass(title, 'title-train')) {
    if (checkClass(title, Order.DESC)) {
      sortByTitle(newFullCards, 'train', Order.DESC);
      sortCards.push(...newFullCards);
      renderStatistic(sortCards, Order.ASC);
    } else {
      sortByTitle(newFullCards, 'train', Order.ASC);
      sortCards.push(...newFullCards);
      renderStatistic(sortCards, Order.DESC);
    }
  } else if (checkClass(title, 'title-play')) {
    if (checkClass(title, Order.DESC)) {
      sortByTitle(newFullCards, 'answers', Order.DESC);
      sortCards.push(...newFullCards);
      renderStatistic(sortCards, Order.ASC);
    } else {
      sortByTitle(newFullCards, 'answers', Order.ASC);
      sortCards.push(...newFullCards);
      renderStatistic(sortCards, Order.DESC);
    }
  } else if (checkClass(title, 'title-errors')) {
    if (checkClass(title, Order.DESC)) {
      sortByTitle(newFullCards, 'errors', Order.DESC);
      sortCards.push(...newFullCards);
      renderStatistic(sortCards, Order.ASC);
    } else {
      sortByTitle(newFullCards, 'errors', Order.ASC);
      sortCards.push(...newFullCards);
      renderStatistic(sortCards, Order.DESC);
    }
  } else if (checkClass(title, 'title-percent')) {
    if (checkClass(title, Order.DESC)) {
      sortByTitle(newFullCards, 'percent', Order.DESC);
      sortCards.push(...newFullCards);
      renderStatistic(sortCards, Order.ASC);
    } else {
      sortByTitle(newFullCards, 'percent', Order.ASC);
      sortCards.push(...newFullCards);
      renderStatistic(sortCards, Order.DESC);
    }
  }
};
