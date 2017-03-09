import { 
    SET_SEARCH_FILTER,
    RECIEVE_WEATHER_DATA_FOR_CITY,
    SET_SELECTED_FORECAST
} from '../actions/actionTypes';

const initialState = {
    searchFilter: '',
    weatherData: {},
    selectedForecast: null
};

function setSearchFilter(state, action) {
    return Object.assign({}, state, {
        searchFilter: action.searchFilter
    });
}

function setWeatherDataForCity(state, action) {
    var dataCopy = state.weatherData;
    dataCopy[action.cityName] = action.data;

    console.log(' new list::: ', dataCopy);

    return Object.assign({}, state, {
        data: dataCopy
    });
}

function setSelectedForecast(state, action) {
    var newSelectedForecast = {
        index: action.index,
        cityName: action.cityName
    };

    console.log('newSelectedForecast::: ', newSelectedForecast);

    return Object.assign({}, state, {
        selectedForecast: newSelectedForecast
    });
}

export function appReducer(state = initialState, action) {
    switch(action.type) {
        case SET_SELECTED_FORECAST: return setSelectedForecast(state, action);
        case SET_SEARCH_FILTER: return setSearchFilter(state, action);
        case RECIEVE_WEATHER_DATA_FOR_CITY: return setWeatherDataForCity(state, action);
        default: return state;
    }
}