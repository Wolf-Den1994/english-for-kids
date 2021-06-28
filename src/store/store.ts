import { createStore } from 'redux';
import { rootReducer } from './rootReducer';
import { input } from '../header/switcher';
import { play, train } from './actions';

export const store = createStore(rootReducer);

const switchState = (): void => {
  if (input.checked === true) {
    store.dispatch(train());
  } else {
    store.dispatch(play());
  }
};

input.addEventListener('click', switchState);
