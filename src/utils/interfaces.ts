import { TypeStateApp } from './types';

export interface ICards {
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
}

export interface IObjStateApp {
  page: number;
  stateApp: TypeStateApp;
  countStatistic: number;
  countCards: number;
}

export interface IHTMLElems {
  arrSvgs: HTMLElement[];
  arrParags: HTMLParagraphElement[];
  arrImages: HTMLImageElement[];
  btnStartGame: HTMLButtonElement;
}

export interface IGameState {
  arrAudios: string[];
  arrImages: string[];
  counterErrors: number;
}

export interface IFullCars {
  number: number;
  category: string;
  word: string;
  translation: string;
  train: number;
  play: number;
  errors: number;
  answers: number;
  percent: number;
}
