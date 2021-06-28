import cards from '../cards';
import { objGame } from '../control/obj-game';
import { dispatchInfo, fullCards } from '../control/obj-statistic';
import { objApp } from '../control/objs';
import { renderFinish } from '../finish/finish';
import { arrDifficultWord } from '../train-difficult/render-train-difficult';
import { addClassList } from '../utils/add-class';
import { changeClassList } from '../utils/change-class';
import { ElemClasses, IndexSounds, Tags } from '../utils/enums';
import { getStringWord } from '../utils/get-word';
import { ICards } from '../utils/interfaces';
import { sound } from './sound';

const addStars = (nameClass: string): void => {
  const score = <HTMLDivElement>document.querySelector('.score');
  const star = document.createElement(Tags.SPAN);
  star.className = `star ${nameClass}`;
  score.append(star);
};

const generateRandom = (page: ICards[]): string[] => {
  const arrAudios: string[] = [];
  for (let i = 0; i < page.length; i++) {
    arrAudios.push(page[i].audioSrc);
  }
  return arrAudios.sort(() => Math.random() - 0.5);
};

export const startGame = (elem: HTMLElement): void => {
  changeClassList(elem, ElemClasses.BTN_START_GAME, ElemClasses.REPEAT);
  if (objApp.page === 10) {
    const randomAudios = generateRandom(arrDifficultWord);
    objGame.arrAudios = randomAudios;
    sound(randomAudios[0], IndexSounds.FIRST);
  } else {
    const page = cards[objApp.page] as ICards[];
    const randomAudios = generateRandom(page);
    objGame.arrAudios = randomAudios;
    sound(randomAudios[0], IndexSounds.FIRST);
  }
};

export const gameProcess = (elem: HTMLElement): void => {
  const image = elem as HTMLImageElement;
  if (objGame.arrAudios.length > 0) {
    const wordImage = getStringWord(image.src);
    const wordAudio = getStringWord(objGame.arrAudios[0]);
    if (wordImage === wordAudio) {
      sound(`./audio/correct.mp3`, IndexSounds.SECOND);
      addClassList(elem, ElemClasses.GREAT);
      addStars('win');
      fullCards.forEach((item) => {
        if (item.word === wordImage) {
          item.play++;
          item.answers++;
          item.percent = (item.play / item.answers) * 100;
        }
      });
      dispatchInfo(fullCards);
      objGame.arrAudios.shift();
      if (objGame.arrAudios.length > 0) {
        setTimeout(() => {
          sound(objGame.arrAudios[0], IndexSounds.FIRST);
        }, 1000);
      } else {
        renderFinish();
      }
    } else {
      objGame.counterErrors++;
      sound(`./audio/error.mp3`, IndexSounds.SECOND);
      addStars('fail');
      fullCards.forEach((item) => {
        if (item.word === wordAudio) {
          item.errors++;
          item.answers++;
          item.percent = (item.play / item.answers) * 100;
        }
      });
      dispatchInfo(fullCards);
    }
  }
};
