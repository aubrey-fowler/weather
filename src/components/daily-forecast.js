import React from 'react';

class DailyForecast extends React.Component {

    _handleClick: () => void;

    constructor(props) {
        super(props);

        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick() {
        this.props.onClick(this.props.index);
    }

    render() {
        const date = new Date(this.props.datetime).toDateString();

        return (
            <div style={{ background: 'pink' }} onClick={this._handleClick}>
                {date}
                {' '}
                {this.props.aveDailyTemp}
            </div>
        );
    }
}

DailyForecast.propTypes = {
    datetime: React.PropTypes.number.isRequired,
    aveDailyTemp: React.PropTypes.number.isRequired,
    index: React.PropTypes.number.isRequired,
    onClick: React.PropTypes.func.isRequired
};

export default DailyForecast;