import { Tags } from '../utils/enums';

export const root = document.createElement(Tags.DIV);
root.className = 'root';
root.id = 'root';
document.body.append(root);
