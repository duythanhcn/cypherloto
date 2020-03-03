import { createReducer, createActions } from 'reduxsauce'

const INITIAL_STATE = {}

const { Types } = createActions({
  setUser: ['SET_USER']
})

export const setUser = (state, action) => {
  return { ...state, ...action.data }
}

export const HANDLERS = {
  [Types.SET_USER]: setUser
}

export const reducer = createReducer(INITIAL_STATE, HANDLERS)