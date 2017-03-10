import React from 'react';
import { connect } from 'react-redux';
import { setCityData, requestWeatherData, setSelectedForecast, clearSelectedForecast } from '../src/actions/actions';
import Wrapper from './components/wrapper';
import DetailedDailyForecast from './components/detailed-daily-forecast';

class App extends React.Component {
    render() {
        if (this.props.selectedForecast == null) {
            return (
                <Wrapper 
                    requestWeatherData={this.props.requestWeatherData} 
                    currentCity={this.props.currentCity} 
                    setCityData={this.props.setCityData}
                    onClick={this.props.setSelectedForecast}
                    data={this.props.data} />
            );
        }

        return (
            <DetailedDailyForecast 
                onClose={this.props.clearSelectedForecast} 
                data={this.props.data[this.props.selectedForecast.index]} />
        );
    }
}

const mapStateToProps = (store) => {
    return { 
        currentCity: store.currentCity,
        data: store.currentCity == null ? null : store.weatherData[store.currentCity.id],
        selectedForecast: store.selectedForecast
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCityData: (id) => {
            dispatch(setCityData(id));
        },
        requestWeatherData: (id) => {
            dispatch(requestWeatherData(id));
        },
        setSelectedForecast: (id, index) => {
            dispatch(setSelectedForecast(id, index));
        },
        clearSelectedForecast: () => {
            dispatch(clearSelectedForecast());
        }
    };
}

App.propTypes = {
    currentCity: React.PropTypes.object,
    requestWeatherData: React.PropTypes.func.isRequired,
    setCityData: React.PropTypes.func.isRequired
};

App.contextTypes = {
    store: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);