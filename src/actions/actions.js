// fetch polyfill for IE and Safari support
import 'whatwg-fetch';

import { 
    SET_SEARCH_FILTER,
	RECIEVE_WEATHER_DATA_FOR_CITY,
	SET_SELECTED_FORECAST
} from '../actions/actionTypes';

import { checkStatus, parseJSON, getResults } from './actionUtils';
import { NUMBER_OF_DAYS_TO_FORECAST } from '../constants/constants';

export function setSearchFilter(searchFilter) {  
    return {
        type: SET_SEARCH_FILTER,
        searchFilter
    };
}

function receiveWeatherData(cityName, data) {
	console.log('receiveWeatherData::: ', cityName, data);
    return {
        type: RECIEVE_WEATHER_DATA_FOR_CITY,
        cityName,
        data
    };
}

export function requestWeatherData(searchFilter) {
    return dispatch => {
        return fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${searchFilter}&units=metric&cnt=${NUMBER_OF_DAYS_TO_FORECAST}&APPID=7727b4d189275f405df0eaa13267eaa2`)
            .then(checkStatus)
            .then(parseJSON)
            .then(getResults)
            .then(result => dispatch(receiveWeatherData(result.cityName, result.data)))
            .catch(error => console.log('request failed', error));
    }
}

export function setSelectedForecast(cityName, index) {
    return {
        type: SET_SELECTED_FORECAST,
        cityName,
        index
    };
}