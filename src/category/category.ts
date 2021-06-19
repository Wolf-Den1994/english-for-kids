import cards from '../cards';
import { root } from '../root/root';
import { CATEGORY, imgCategories } from '../utils/consts';
import { Tags } from '../utils/enums';

const category = document.createElement(Tags.DIV);
category.className = 'category';
root.append(category);

for (let i = 0; i < cards[CATEGORY].length; i++) {
  const card = document.createElement(Tags.DIV);
  card.className = 'main-card';
  category.append(card);

  const img = document.createElement(Tags.IMG);
  img.src = `./img/${imgCategories[i]}.jpg`;
  img.alt = `${imgCategories[i]}`;
  card.append(img);

  const p = document.createElement(Tags.P);
  p.className = 'text';
  p.innerHTML = `${cards[CATEGORY][i]}`;
  card.append(p);
}
