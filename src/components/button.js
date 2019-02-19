//import React from 'react';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    state = {
        value: 'off',
    };

    handleClick = () => {
        this.setState(prevState =>({
            value: prevState.value === 'Off' ? 'On' : 'Off'
        }))
    };

    render() {
        const {value} = this.state;
        const {color} = this.props;
        return (
            <button style={{background: color}} onClick={this.handleClick}>
                { value }
            </button>
        );
    }
}


Button.propTypes = {
    color: PropTypes.string,
};

export default Button;
