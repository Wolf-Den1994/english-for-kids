import { AnyAction } from 'redux';
import { StateApp } from '../utils/enums';
import { TypeStateApp } from '../utils/types';
import { PLAY, TRAIN } from './redux-types';

interface PositionState {
  value: TypeStateApp;
}

const initialState: PositionState = {
  value: StateApp.TRAIN,
};

export const rootReducer = (state = initialState, action: AnyAction) => {
  if (action.type === TRAIN) {
    return { ...state, value: StateApp.TRAIN };
  } else if (action.type === PLAY) {
    return { ...state, value: StateApp.PLAY };
  }

  return state;
};
