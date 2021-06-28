import { StateApp } from '../utils/enums';

interface ITypeState {
  type: string;
}

export function train(): ITypeState {
  return {
    type: StateApp.TRAIN,
  };
}

export function play(): ITypeState {
  return {
    type: StateApp.TRAIN,
  };
}
