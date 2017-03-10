// fetch polyfill for IE and Safari support
import 'whatwg-fetch';

import { 
    SET_SELECTED_CITY_DATA,
	RECIEVE_WEATHER_DATA_FOR_CITY,
	SET_SELECTED_FORECAST,
    CLEAR_SELECTED_FORECAST
} from '../actions/actionTypes';

import { checkStatus, parseJSON, getResults } from './actionUtils';
import { NUMBER_OF_DAYS_TO_FORECAST } from '../constants/constants';

export function clearSelectedForecast() {
    return {
        type: CLEAR_SELECTED_FORECAST
    };
}

export function setCityData(cityData) {  
    return {
        type: SET_SELECTED_CITY_DATA,
        cityData
    };
}

function receiveWeatherData(id, data) {
    return {
        type: RECIEVE_WEATHER_DATA_FOR_CITY,
        id,
        data
    };
}

export function requestWeatherData(id) {
    return dispatch => {
        return fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?id=${id}&units=metric&cnt=${NUMBER_OF_DAYS_TO_FORECAST}&APPID=7727b4d189275f405df0eaa13267eaa2`)
            .then(checkStatus)
            .then(parseJSON)
            .then(getResults)
            .then(result => dispatch(receiveWeatherData(result.id, result.data)))
            .catch(error => console.log('request failed', error));
    }
}

export function setSelectedForecast(id, index) {
    return {
        type: SET_SELECTED_FORECAST,
        id,
        index
    };
}