import { fullCards } from '../control/obj-statistic';
import { root } from '../root/root';
import { Tags } from '../utils/enums';
import { IFullCars } from '../utils/interfaces';

export const copyFullCards: IFullCars[] = [];

export const renderTrainDifficult = (): void => {
  copyFullCards.length = 0;
  let count = 0;
  copyFullCards.push(...fullCards.slice());
  const arrDifficultWord: IFullCars[] = [];
  copyFullCards.sort((a, b) => (a.errors > b.errors ? -1 : 1));
  copyFullCards.forEach((item) => {
    if (item.errors > 0 && count !== 8) {
      arrDifficultWord.push(item);
      count++;
    }
  });

  root.innerHTML = '';
  const diffDiv = document.createElement(Tags.DIV);
  diffDiv.className = 'diff';
  root.append(diffDiv);

  if (count > 0) {
    for (let i = 0; i < arrDifficultWord.length; i++) {
      const card = document.createElement(Tags.DIV);
      card.className = 'main-card';
      diffDiv.append(card);

      const flipper = document.createElement(Tags.DIV);
      flipper.className = 'flipper';
      card.append(flipper);

      const front = document.createElement(Tags.DIV);
      front.className = 'front';
      flipper.append(front);

      const img = document.createElement(Tags.IMG);
      const objCard = arrDifficultWord[i] as IFullCars;
      img.src = `${arrDifficultWord[i].image}`;
      img.alt = `${arrDifficultWord[i].word}`;
      img.className = `img ${arrDifficultWord[i].category} image picture`;
      front.append(img);

      const pFront = document.createElement(Tags.P);
      pFront.innerHTML = `${objCard.word}`;
      pFront.className = 'text text-font';
      front.append(pFront);

      const reperse = document.createElement(Tags.SVG);
      reperse.className = 'svg image-svg';
      front.append(reperse);

      const back = document.createElement(Tags.DIV);
      back.className = 'back';
      flipper.append(back);

      const imgBack = document.createElement(Tags.IMG);
      imgBack.src = `${objCard.image}`;
      imgBack.className = 'picture';
      imgBack.alt = `${objCard.word}`;
      back.append(imgBack);

      const pBack = document.createElement(Tags.P);
      pBack.className = 'text';
      pBack.innerHTML = `${objCard.translation}`;
      back.append(pBack);
    }
  } else {
    const empryDiv = document.createElement(Tags.DIV);
    empryDiv.className = 'empry';
    diffDiv.append(empryDiv);
  }

  const audio = document.createElement(Tags.AUDIO);
  audio.className = 'audio';
  diffDiv.append(audio);
};
