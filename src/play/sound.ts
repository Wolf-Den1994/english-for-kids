import { ICards } from '../utils/interfaces';

export const sound = (link: string): void => {
  const audio = <HTMLAudioElement>document.querySelector('.audio');
  audio.currentTime = 0;
  audio.src = `./${link}`;
  audio.play();
};

export const playSound = (page: ICards[], word: string): void => {
  const rightObjWithWord = page.filter((obj) => obj.word === word);
  const link = `${rightObjWithWord[0].audioSrc}`;
  sound(link);
};
