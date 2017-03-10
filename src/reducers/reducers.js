import { 
    SET_SELECTED_CITY_DATA,
    RECIEVE_WEATHER_DATA_FOR_CITY,
    SET_SELECTED_FORECAST,
    CLEAR_SELECTED_FORECAST
} from '../actions/actionTypes';

const initialState = {
    currentCity: null,
    weatherData: {},
    selectedForecast: null
};

function setCityData(state, action) {
    return Object.assign({}, state, {
        currentCity: action.cityData
    });
}

function recieveWeatherDataForCity(state, action) {
    var dataCopy = state.weatherData;
    dataCopy[action.id] = action.data;

    return Object.assign({}, state, {
        data: dataCopy
    });
}

function setSelectedForecast(state, action) {
    var newSelectedForecast = {
        index: action.index,
        id: action.id
    };

    return Object.assign({}, state, {
        selectedForecast: newSelectedForecast
    });
}

function clearSelectedForecast(state) {
    return Object.assign({}, state, {
        selectedForecast: null
    });
}

export function appReducer(state = initialState, action) {
    switch(action.type) {
        case CLEAR_SELECTED_FORECAST: return clearSelectedForecast(state);
        case SET_SELECTED_FORECAST: return setSelectedForecast(state, action);
        case SET_SELECTED_CITY_DATA: return setCityData(state, action);
        case RECIEVE_WEATHER_DATA_FOR_CITY: return recieveWeatherDataForCity(state, action);
        default: return state;
    }
}