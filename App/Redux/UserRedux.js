import { createReducer, createActions } from 'reduxsauce'

const INITIAL_STATE = {}

const { Types } = createActions({
  setUser: ['SET_USER'],
  clearUser: ['CLEAR_USER']
})

export const setUser = (state, action) => {
  const newState = { ...state, ...action.data };
  return newState;
}

export const clearUser = (state, action) => {
  return {};
}

export const HANDLERS = {
  [Types.SET_USER]: setUser,
  [Types.CLEAR_USER]: clearUser
}

export const reducer = createReducer(INITIAL_STATE, HANDLERS);