import { ICards } from '../utils/interfaces';

const tone = (audio: HTMLAudioElement, link: string) => {
  audio.currentTime = 0;
  audio.src = `./${link}`;
  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise.then(() => {}).catch(() => {});
  }
};

export const sound = (link: string, index: 'first' | 'second'): void => {
  const audio = <HTMLAudioElement>document.querySelector('.audio1');
  const audio2 = <HTMLAudioElement>document.querySelector('.audio2');

  if (index === 'first') {
    tone(audio, link);
  } else {
    tone(audio2, link);
  }
};

export const playSound = (page: ICards[], word: string): void => {
  const rightObjWithWord = page.filter((obj) => obj.word === word);
  const link = `${rightObjWithWord[0].audioSrc}`;
  sound(link, 'first');
};
