import React from 'react';
import ControlledTextInput from './controlled-text-input';

class CitySearchComponent extends React.Component {

    _handleOnClick: () => void;
    _handleOnChange: (value) => void;

    constructor(props) {
        super(props);

        this._handleOnClick = this._handleOnClick.bind(this);
        this._handleOnChange = this._handleOnChange.bind(this);
    }

    _handleOnClick() {
        console.log(' on click submit ');
        this.props.requestWeatherData(this.props.currentSearchFilter);
    }

    _handleOnChange(value) {
        console.log(value);
        this.props.onSetSearchFilter(value);
    }

    render() {
        return (
            <div>
                <ControlledTextInput 
                    value={this.props.currentSearchFilter} 
                    onChange={this._handleOnChange} />
                <button type="button" onClick={this._handleOnClick}>Submit</button>
            </div>
        );
    }
}

CitySearchComponent.propTypes = {
    requestWeatherData: React.PropTypes.func.isRequired,
    onSetSearchFilter: React.PropTypes.func.isRequired,
    currentSearchFilter: React.PropTypes.string.isRequired
};

export default CitySearchComponent;