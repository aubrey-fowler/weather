import React from 'react';

class DetailedDailyForecast extends React.Component {
    render() {
        return (
            <div style={{ background: 'green' }}>
                {this.props.data.dt}
            </div>
        );
    }
}

DetailedDailyForecast.propTypes = {
    data: React.PropTypes.object.isRequired
};

export default DetailedDailyForecast;