import * as ActionTypes from '../action-types';

export default function location(state = {}, action) {
  switch (action.type) {
    case ActionTypes.LOCATION_REQUEST_SUCCESS:
      return {
        lat: action.data.coords.latitude,
        long: action.data.coords.longitude
      };
    default:
      return state;
  }
}
