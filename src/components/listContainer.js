import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TaskEditor from "./TaskEditor";
import Item from "./Item";

class ListContainer extends Component {
    state = {
        list: []
    };
    createListElement = (task) => {
      this.setState(prevState => ({
          list: [
              ...prevState.list,
              task
          ]
      }))
    };

    render() {
        const { list } =  this.state;
        return (
            <div>
                <TaskEditor createListElement={this.createListElement}/>
                <List list={list}/>
            </div>
        );
    }
}

ListContainer.propTypes = {};

export default ListContainer;