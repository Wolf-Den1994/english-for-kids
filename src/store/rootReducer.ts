import { AnyAction } from 'redux';
import { StateApp } from '../utils/enums';
import { TypeStateApp } from '../utils/types';

interface PositionState {
  value: TypeStateApp;
}

const initialState: PositionState = {
  value: StateApp.TRAIN,
};

export const rootReducer = (
  state = initialState,
  action: AnyAction,
): PositionState => {
  if (action.type === StateApp.TRAIN) {
    return { ...state, value: StateApp.TRAIN };
  }
  if (action.type === StateApp.PLAY) {
    return { ...state, value: StateApp.PLAY };
  }

  return state;
};
