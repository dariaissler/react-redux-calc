import * as types from './types';

export const add = () => ({
  type: types.ADD,
  payload: {
    operation: "operator"
  }
});
export const substract = () => ({
  type: types.SUBSTRACT,
  payload: {
    operation: "operator"
  }
});
export const multiply = () => ({
  type: types.MULTIPLY,
  payload: {
    operation: "operator"
  }
});
export const devide = () => ({
  type: types.DEVIDE,
  payload: {
    operation: "operator"
  }
});
export const clear = () => ({
  type: types.CLEAR,
  payload: {
    operation: "clear"
  }
});
export const equal = () => ({
  type: types.EQUAL,
  payload: {
    operation: "equal"
  }
});
export const update = content => ({
  type: types.UPDATE,
  payload: {
    input: content,
    operation: 'num'
  }
});

