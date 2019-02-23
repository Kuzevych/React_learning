import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TaskEditor extends Component {
    state = {
      value: '',
    };
    handleInputChange = () => {
        const {value} = event.target;
        this.setState({
            value,
        })
    };

    createListElement = () => {
        const { value } = this.state;
        const { createListElement } = this.props;
    }
    render() {
        const { value } = this.state;
        const { createListElement } = this.props;
        return (
            <div>
                <input onChange={this.handleInputChange}/>
                <button onClick={()=> createListElement(value)}>Add</button>
            </div>
        );
    }
}

TaskEditor.propTypes = {
    createListElement: PropTypes.func.isRequired,
};

export default TaskEditor;