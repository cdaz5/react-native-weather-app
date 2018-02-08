import { combineReducers } from 'redux';

import weatherReducer from './weather/reducer';
import locationReducer from './location/reducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
  location: locationReducer
});

export default rootReducer;
