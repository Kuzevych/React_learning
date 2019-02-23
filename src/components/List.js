import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

class List extends Component {
    render() {
        const { list } = this.props;
        return list.map((item, index) => {
           <Item key={index} item={item}/>
        });
    }
}

List.propTypes = {
    list: PropTypes.array.isRequired,
};

export default List;