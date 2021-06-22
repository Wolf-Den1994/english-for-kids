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
}
