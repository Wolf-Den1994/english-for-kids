import cards from '../cards';
import { objGame } from '../control/obj-game';
import { objState } from '../control/objs';
import { addClassList } from '../utils/add-class';
import { changeClassList } from '../utils/change-class';
import { Tags } from '../utils/enums';
import { getStringWord } from '../utils/get-word';
import { ICards } from '../utils/interfaces';
import { sound } from './sound';

const addStars = (nameClass: string) => {
  const score = <HTMLDivElement>document.querySelector('.score');
  const star = document.createElement(Tags.SPAN);
  star.className = `star ${nameClass}`;
  score.append(star);
};

const generateRandom = (page: ICards[]) => {
  const arrAudios: string[] = [];
  for (let i = 0; i < page.length; i++) {
    arrAudios.push(page[i].audioSrc);
  }
  return arrAudios.sort(() => Math.random() - 0.5);
};

export const startGame = (elem: HTMLElement): void => {
  changeClassList(elem, 'btn-start-game', 'repeat');
  const page = cards[objState.page] as ICards[];
  const randomAudios = generateRandom(page);
  // console.log(page)
  // console.log(randomAudios)
  objGame.arrAudios = randomAudios;
  sound(randomAudios[0], 'first');
};

export const gameProcess = (elem: HTMLElement): void => {
  const image = elem as HTMLImageElement;
  // console.log(image.src, objGame.arrAudios[0]);
  if (objGame.arrAudios.length > 0) {
    const wordImage = getStringWord(image.src);
    const wordAudio = getStringWord(objGame.arrAudios[0]);
    // console.log(wordAudio, wordImage);
    if (wordImage === wordAudio) {
      // console.log('начало', objGame.arrAudios);
      sound(`./audio/correct.mp3`, 'second');
      addClassList(elem, 'great');
      addStars('win');
      objGame.arrAudios.shift();
      setTimeout(() => {
        if (objGame.arrAudios.length > 0) {
          sound(objGame.arrAudios[0], 'first');
        }
      }, 1000);
      // console.log('конец', objGame.arrAudios);
    } else {
      sound(`./audio/error.mp3`, 'second');
      addStars('fail');
    }
  }
};
