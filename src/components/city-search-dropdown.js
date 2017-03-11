import React from 'react';
import VirtualizedSelect from 'react-virtualized-select';
import { checkStatus } from '../actions/actionUtils';

//import 'react-select/dist/react-select.css';
//import 'react-virtualized/styles.css';
//import 'react-virtualized-select/styles.css';

function CountryOptionRenderer ({ focusedOption, focusedOptionIndex, focusOption, key, labelKey, option, options, selectValue, style, valueArray }) {   
    const flagSource = `http://openweathermap.org/images/flags/${option.sys.country.toLowerCase()}.png`;

    return (
        <div
            key={key}
            onClick={() => selectValue(option)}
            onMouseOver={() => focusOption(option)}>
            <label>
                {option.name}{', '}{option.sys.country}
            </label>
            {' '}
            <img src={flagSource} alt={option.sys.country} />
            {' '}
            <label>
                Geo coords: 
                <a target="_blank" href={`http://openweathermap.org/weathermap?zoom=12&lat=${option.coord.lat}&lon=${option.coord.lon}`}>
                    {`[${option.coord.lat}, ${option.coord.lon}]`}
                </a>
            </label>
        </div>
    );
}

class CitySearchDropdown extends React.Component {

    _handleSelectionChange: (selectionValue) => void;
    _getOptions: (input) => void;

    constructor(props) {
        super(props);

        this.state = { selectValue: props.currentCity };

        this._getOptions = this._getOptions.bind(this);
        this._handleSelectionChange = this._handleSelectionChange.bind(this);
    }

    _handleSelectionChange(selectValue) {
        this.setState({ selectValue });
        this.props.setCityData(selectValue);
        this.props.requestWeatherData(selectValue.id);
    }

    _getOptions(input) {
        if (input == null || input === '') {
            return Promise.resolve({ options: [] });
        }

        return fetch(`http://api.openweathermap.org/data/2.5/find?q=${input}&appid=7727b4d189275f405df0eaa13267eaa2`)
            .then(checkStatus)
            .then((response) => {
                return response.json();
            }).then((json) => {
                return { options: json.list };
            }).catch(error => console.log('Request failed: ', error));
    }

    render() {
        return (
            <VirtualizedSelect
                loadOptions={this._getOptions}
                async={true}
                labelKey={'name'}
                clearable={false}
                onChange={this._handleSelectionChange}
                optionRenderer={CountryOptionRenderer}
                value={this.state.selectValue} />
        );
    }
}

CitySearchDropdown.propTypes = {
    currentCity: React.PropTypes.object,
    requestWeatherData: React.PropTypes.func.isRequired,
    setCityData: React.PropTypes.func.isRequired
};

export default CitySearchDropdown;