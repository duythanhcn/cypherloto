import { combineReducers, createStore } from 'redux';

const reducers = combineReducers({
  user: require('./UserRedux').reducer
})

export default createStore(reducers);

