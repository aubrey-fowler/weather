import React from 'react';
import LongTermForecast from './long-term-forecast';
import CitySearchDropdown from './city-search-dropdown';

class Wrapper extends React.Component {
    render() {
        return (
            <div>
                <CitySearchDropdown
                    setCityData={this.props.setCityData}
                    requestWeatherData={this.props.requestWeatherData}
                    currentCity={this.props.currentCity} />
                {(this.props.data != null && this.props.data.length > 0) &&
                    <LongTermForecast 
                        data={this.props.data} 
                        onClick={this.props.onClick}
                        cityName={this.props.currentCity.name}
                        countryName={this.props.currentCity.sys.country} />
                }
            </div>
        );
    }
}

Wrapper.propTypes = {
    currentCity: React.PropTypes.object,
    requestWeatherData: React.PropTypes.func.isRequired,
    setCityData: React.PropTypes.func.isRequired,
    onClick: React.PropTypes.func.isRequired,
    data: React.PropTypes.array
};

export default Wrapper;