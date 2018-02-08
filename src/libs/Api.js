import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const APP = '793fb6fc1e4e754bf43bb7f8c426c470';

export function fetchWeather(lat, long) {
  return axios({
    method: 'GET',
    url: `${BASE_URL}lat=${lat}&lon=${long}&units=imperial&appid=${APP}`
  });
}

// export function fetchLocation() {
//   navigator.geolocation.getCurrentPosition(
//     posData => console.log('posData', posData),
//     error => console.log(error)
//   );
// }
