import { combineReducers, createStore } from 'redux';

const reducers = combineReducers({
  user: require('./UserRedux').reducer,
  buy: require('./BuyRedux').reducer,
  search: require('./SearchRedux').reducer,
  lot: require('./LotRedux').reducer
})

export default createStore(reducers);

