import { ICards } from '../utils/interfaces';

export const playSound = function sayWordInEnglish(
  page: ICards[],
  word: string,
): void {
  const audio = <HTMLAudioElement>document.querySelector('.audio');
  const rightObjWithWord = page.filter((obj) => obj.word === word);
  audio.currentTime = 0;
  audio.src = `./${rightObjWithWord[0].audioSrc}`;
  audio.play();
};
