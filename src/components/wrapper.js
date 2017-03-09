import React from 'react';
import CitySearchComponent from './city-search-component';
import LongTermForecastComponent from './long-term-forecast-component';

class Wrapper extends React.Component {
    render() {
        return (
            <div>
                <CitySearchComponent 
                    requestWeatherData={this.props.requestWeatherData}
                    onSetSearchFilter={this.props.setSearchFilter}
                    currentSearchFilter={this.props.currentSearchFilter} />
                {(this.props.data != null && this.props.data.length > 0) &&
                    <LongTermForecastComponent 
                        data={this.props.data} 
                        onClick={this.props.onClick}
                        cityName={'London'} />
                }
            </div>
        );
    }
}

Wrapper.propTypes = {
    currentSearchFilter: React.PropTypes.string.isRequired,
    requestWeatherData: React.PropTypes.func.isRequired,
    setSearchFilter: React.PropTypes.func.isRequired,
    onClick: React.PropTypes.func.isRequired,
    data: React.PropTypes.array
};

export default Wrapper;