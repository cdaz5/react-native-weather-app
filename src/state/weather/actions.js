import * as ActionTypes from '../action-types';
import * as API from '../../libs/Api';

export const requestingWeather = () => ({
  type: ActionTypes.REQUESTING_WEATHER
});

export const requestWeatherSuccess = weatherData => ({
  type: ActionTypes.WEATHER_REQUEST_SUCCESS,
  data: weatherData
});

export const requestWeatherFailure = error => ({
  type: ActionTypes.WEATHER_REQUEST_FAILURE,
  error
});

export function getWeather(lat, long) {
  return (dispatch) => {
    dispatch(requestingWeather());
    return API.fetchWeather(lat, long)
      .then((response) => {
        const weather = {
          temp: response.data.main.temp,
          type: response.data.weather[0].main
        };
        dispatch(requestWeatherSuccess(weather));
      })
      .catch(error => dispatch(requestWeatherFailure(error)));
  };
}
