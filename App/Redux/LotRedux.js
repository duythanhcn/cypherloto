import { createReducer, createActions } from 'reduxsauce'

const INITIAL_STATE = { isLot: false }

const { Types } = createActions({
  setLot: ['SET_LOT']
})

export const setLot = (state, action) => {
  console.log('setlot', action)
  const newState = { isLot: action.data };
  return newState;
}

export const HANDLERS = {
  [Types.SET_LOT]: setLot
}

export const reducer = createReducer(INITIAL_STATE, HANDLERS);