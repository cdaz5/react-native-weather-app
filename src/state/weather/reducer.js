import * as ActionTypes from '../action-types';

export default function weather(
  state = {
    temp: '0',
    type: 'initialLoad'
  },
  action
) {
  switch (action.type) {
    case ActionTypes.WEATHER_REQUEST_SUCCESS:
      console.log('action.data', action.data);
      return {
        ...action.data
      };
    default:
      return state;
  }
}
