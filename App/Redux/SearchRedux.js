import { createReducer, createActions } from 'reduxsauce'

const INITIAL_STATE = {}

const { Types } = createActions({
  setSearch: ['SET_SEARCH']
})

export const setSearch = (state, action) => {
  const newState = { ...action.data };
  return newState;
}

export const HANDLERS = {
  [Types.SET_SEARCH]: setSearch
}

export const reducer = createReducer(INITIAL_STATE, HANDLERS);