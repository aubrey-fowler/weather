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
        const date = new Date(this.props.datetime * 1000).toDateString();

        return (
            <div style={{ background: 'pink', display: 'inline-block', padding: '5px', margin: '5px', border: 'black' }} onClick={this._handleClick}>
                <p>{date}</p>
                <p>{'Daily Average: '}{this.props.aveDailyTemp}</p>
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