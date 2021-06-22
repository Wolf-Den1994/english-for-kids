import cards from '../cards';
import { root } from '../root/root';
import { CATEGORY } from '../utils/consts';
import { Tags } from '../utils/enums';
import { ICards } from '../utils/interfaces';

export const arrSvgs: HTMLElement[] = [];
export const arrParags: HTMLParagraphElement[] = [];
export const arrImages: HTMLImageElement[] = [];

export const renderSubject = function renderSubjectPage(index: number): void {
  root.innerHTML = '';

  const title = document.createElement(Tags.TITLE2);
  title.className = 'title';
  title.innerHTML = cards[CATEGORY][index];
  root.append(title);

  const subject = document.createElement(Tags.DIV);
  subject.className = 'subject';
  root.append(subject);

  for (let i = 0; i < cards[index + 1].length; i++) {
    const card = document.createElement(Tags.DIV);
    card.className = 'main-card';
    subject.append(card);

    const flipper = document.createElement(Tags.DIV);
    flipper.className = 'flipper';
    card.append(flipper);

    const front = document.createElement(Tags.DIV);
    front.className = 'front';
    flipper.append(front);

    const img = document.createElement(Tags.IMG);
    const objCard = cards[index + 1][i] as ICards;
    img.src = `${objCard.image}`;
    img.alt = `${objCard.word}`;
    img.className = `img ${cards[CATEGORY][index]}`;
    front.append(img);

    const pFront = document.createElement(Tags.P);
    pFront.className = 'text';
    pFront.innerHTML = `${objCard.word}`;
    front.append(pFront);

    const reperse = document.createElement(Tags.SVG);
    reperse.className = 'svg';
    front.append(reperse);

    const back = document.createElement(Tags.DIV);
    back.className = 'back';
    flipper.append(back);

    const imgBack = img.cloneNode();
    back.append(imgBack);

    const pBack = document.createElement(Tags.P);
    pBack.className = 'text';
    pBack.innerHTML = `${objCard.translation}`;
    back.append(pBack);

    arrSvgs.push(reperse);
    arrParags.push(pFront);
    arrImages.push(img);
  }

  const audio = document.createElement(Tags.AUDIO);
  audio.className = 'audio';
  subject.append(audio);
};
