import { PLAY, TRAIN } from './redux-types';

export function train() {
  return {
    type: TRAIN,
  };
}

export function play() {
  return {
    type: PLAY,
  };
}
