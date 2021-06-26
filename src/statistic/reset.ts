import { fullCards } from "../control/obj-statistic";
import { Order } from "../utils/enums";
import { IFullCars } from "../utils/interfaces";
import { renderStatistic } from "./render-statistic";

const cleanArr = (arr: IFullCars[]) => {
  arr.map(item => {
    item.train = 0;
    item.play = 0;
    item.errors = 0;
    item.answers = 0;
    item.percent = 0;
  })
}

export const resetStatistic = () => {
  cleanArr(fullCards)
  localStorage.setItem('info', JSON.stringify(fullCards))
  renderStatistic(fullCards, Order.DESC);
}