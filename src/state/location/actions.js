import * as ActionTypes from '../action-types';
import * as API from '../../libs/Api';

export const requestingLocation = () => ({
  type: ActionTypes.REQUESTING_LOCATION
});

export const requestLocationSuccess = location => ({
  type: ActionTypes.LOCATION_REQUEST_SUCCESS,
  data: location
});

export const requestLocationFailure = error => ({
  type: ActionTypes.LOCATION_REQUEST_FAILURE,
  error
});

export function getLocation() {
  return (dispatch) => {
    dispatch(requestingLocation());
    navigator.geolocation.getCurrentPosition(
      posData => dispatch(requestLocationSuccess(posData)),
      error => dispatch(requestLocationFailure(error))
    );
  };
}
