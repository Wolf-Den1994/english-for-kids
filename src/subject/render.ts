import cards from '../cards';
import { objState } from '../control/objs';
import { root } from '../root/root';
import { CATEGORY } from '../utils/consts';
import { Tags } from '../utils/enums';
import { ICards } from '../utils/interfaces';

export const renderSubject = (page: number): void => {
  const index = page - 1;
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
    front.append(img);

    const pFront = document.createElement(Tags.P);
    pFront.innerHTML = `${objCard.word}`;
    front.append(pFront);

    const reperse = document.createElement(Tags.SVG);
    front.append(reperse);

    if (objState.stateApp === 'train') {
      img.className = `img ${cards[CATEGORY][index]} image`;
      pFront.className = 'text text-font';
      reperse.className = 'svg image-svg';
    } else {
      img.className = `img ${cards[CATEGORY][index]} image play`;
      pFront.className = 'text text-font play';
      reperse.className = 'svg image-svg play';
    }

    const back = document.createElement(Tags.DIV);
    back.className = 'back';
    flipper.append(back);

    const imgBack = document.createElement(Tags.IMG);
    imgBack.src = `${objCard.image}`;
    imgBack.alt = `${objCard.word}`;
    back.append(imgBack);

    const pBack = document.createElement(Tags.P);
    pBack.className = 'text';
    pBack.innerHTML = `${objCard.translation}`;
    back.append(pBack);
  }

  const audio = document.createElement(Tags.AUDIO);
  audio.className = 'audio';
  subject.append(audio);

  const btnStartGame = document.createElement(Tags.BUTTON);
  btnStartGame.className =
    objState.stateApp === 'train'
      ? 'btn btn-start-game play'
      : 'btn btn-start-game';
  btnStartGame.innerHTML = 'Start game';
  root.append(btnStartGame);
};
