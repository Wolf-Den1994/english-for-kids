import { foo } from './test';
import './styles.scss';

const img = require('./assets/efmuuprdNMk.jpg');

foo();

// для плагина который определяет картинку нужно картинку импортировать
// с помощью require и вствлять ее так
document.body.innerHTML += `
  <img src="${img}" alt="image">
`;

// для копи плагина
// скопировали картинку в public/images и подключаем в html или тут
document.body.innerHTML += `
  <img src="./images/sbrwLMRYq0k.jpg" alt="image2">
`;
