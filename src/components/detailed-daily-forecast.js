import React from 'react';

class DetailedDailyForecast extends React.Component {
    render() {
        console.log('data: ', this.props.data);
    	const date = new Date(this.props.data.dt * 1000).toDateString();
        return (
            <div style={{ background: 'green' }}>
            	<div onClick={this.props.onClose}>
            		{'back button'}
            	</div>
                {date}
            </div>
        );
    }
}

DetailedDailyForecast.propTypes = {
	onClose: React.PropTypes.func.isRequired,
    data: React.PropTypes.object.isRequired
};

export default DetailedDailyForecast;