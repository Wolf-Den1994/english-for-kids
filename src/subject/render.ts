import cards from '../cards';
import { root } from '../root/root';
import { CATEGORY } from '../utils/consts';
import { Tags } from '../utils/enums';
import { ICards } from '../utils/interfaces';

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

    const img = document.createElement(Tags.IMG);
    const objCard = cards[index + 1][i] as ICards;
    img.src = `${objCard.image}`;
    img.alt = `${objCard.word}`;
    img.className = `${cards[CATEGORY][index]}`;
    card.append(img);

    const p = document.createElement(Tags.P);
    p.className = 'text';
    p.innerHTML = `${objCard.word}`;
    card.append(p);

    const reperse = document.createElement(Tags.SVG);
    reperse.className = 'svg';
    card.append(reperse);
  }

  const audio = document.createElement(Tags.AUDIO);
  audio.className = 'audio';
  subject.append(audio);
};
