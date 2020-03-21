import { createReducer, createActions } from 'reduxsauce'

const INITIAL_STATE = { isBuy: false }

const { Types } = createActions({
  setBuy: ['SET_BUY']
})

export const setBuy = (state, action) => {
  const newState = { ...state, ...action.data };
  return newState;
}

export const clearUser = (state, action) => {
  return {};
}

export const HANDLERS = {
  [Types.SET_BUY]: setBuy
}

export const reducer = createReducer(INITIAL_STATE, HANDLERS);