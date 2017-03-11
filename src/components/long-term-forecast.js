import React from 'react';
import DailyForecast from './daily-forecast';
import { NUMBER_OF_DAYS_TO_FORECAST } from '../constants/constants';

class LongTermForecast extends React.Component {

    _handleClick: (index) => void;

    constructor(props) {
        super(props);

        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick(index) {
        this.props.onClick(this.props.cityName, index);
    }

    render() {
        const flagSource = `http://openweathermap.org/images/flags/${this.props.countryName.toLowerCase()}.png`;
        return (
            <div>
                <p>
                    {this.props.cityName}{', '}{this.props.countryName}{' '}
                    <img src={flagSource} alt={this.props.countryName} />
                    {NUMBER_OF_DAYS_TO_FORECAST}{'-Day Forecast'}
                </p>
                {this.props.data.map((entry, index) => (
                    <DailyForecast 
                        key={entry.dt}
                        iconId={entry.weather[0].icon}
                        index={index}
                        onClick={this._handleClick}
                        datetime={entry.dt} 
                        aveDailyTemp={entry.temp.day} />
                ))}
            </div>
        );
    }
}

LongTermForecast.propTypes = {
    cityName: React.PropTypes.string.isRequired,
    countryName: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired,
    data: React.PropTypes.array.isRequired
};

export default LongTermForecast;