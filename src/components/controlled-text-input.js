import React from 'react';
import { ENTER_KEY } from '../constants/constants';

class ControlledTextInput extends React.Component {

    _handleTextChange: (event) => void;
    _handleKeyDown: (event) => void;
    _handleBlur: (event) => void;

    componentDidMount() {
        this.refs.textInputBox.focus();
    }

    constructor(props) {
        super(props);

        this.state = {
            value: props.value
        };

        this._handleTextChange = this._handleTextChange.bind(this);
        this._handleKeyDown = this._handleKeyDown.bind(this);
        this._handleBlur = this._handleBlur.bind(this);
    }

    _handleTextChange(event) {
        console.log('handle text change', event.target.value);
        this.setState({
            value: event.target.value
        });
    }

    _handleBlur(event) {
        console.log('handle blur', event.target.value);
        this.props.onChange(event.target.value);
    }

    _handleKeyDown(event) {
       if(event.keyCode === ENTER_KEY) {
            this.refs.textInputBox.blur();
            
        }
    }

    render () {
        return (
            <input 
                type="text" 
                ref="textInputBox"
                value={this.state.value} 
                onBlur={this._handleBlur}
                onKeyDown={this._handleKeyDown}
                onChange={this._handleTextChange} />
        );
    }
}

ControlledTextInput.propTypes = {
    value: React.PropTypes.string.isRequired
};

export default ControlledTextInput;