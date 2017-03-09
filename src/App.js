import React from 'react';
import { connect } from 'react-redux';
import { setSearchFilter, requestWeatherData, setSelectedForecast } from '../src/actions/actions';
import Wrapper from './components/wrapper';
import DetailedDailyForecast from './components/detailed-daily-forecast';

class App extends React.Component {
    render() {
        if (this.props.selectedForecast == null) {
            return (
                <Wrapper 
                    requestWeatherData={this.props.requestWeatherData} 
                    currentSearchFilter={this.props.currentSearchFilter} 
                    setSearchFilter={this.props.setSearchFilter}
                    onClick={this.props.setSelectedForecast}
                    data={this.props.data} />
            );
        }

        return (
            <DetailedDailyForecast data={this.props.data[this.props.selectedForecast.index]} />
        );
    }
}

const mapStateToProps = (store) => {
    return { 
        currentSearchFilter: store.searchFilter,
        data: store.weatherData['London'],
        selectedForecast: store.selectedForecast
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSearchFilter: (searchFilter) => {
            dispatch(setSearchFilter(searchFilter));
        },
        requestWeatherData: (searchFilter) => {
            dispatch(requestWeatherData(searchFilter));
        },
        setSelectedForecast: (cityName, index) => {
            dispatch(setSelectedForecast(cityName, index));
        }
    };
}

App.propTypes = {
    currentSearchFilter: React.PropTypes.string.isRequired,
    requestWeatherData: React.PropTypes.func.isRequired,
    setSearchFilter: React.PropTypes.func.isRequired
};

App.contextTypes = {
    store: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);