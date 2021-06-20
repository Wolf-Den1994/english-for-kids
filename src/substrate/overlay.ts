import { Tags } from '../utils/enums';

export const overlay = document.createElement(Tags.DIV);
overlay.className = 'overlay';
overlay.id = 'overlay';
document.body.append(overlay);
