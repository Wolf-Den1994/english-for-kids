import { ICards } from '../utils/interfaces';

export const playSound = (page: ICards[], word: string): void => {
  const audio = <HTMLAudioElement>document.querySelector('.audio');
  const rightObjWithWord = page.filter((obj) => obj.word === word);
  audio.currentTime = 0;
  // console.log(rightObjWithWord)
  audio.src = `./${rightObjWithWord[0].audioSrc}`;
  audio.play();
};
