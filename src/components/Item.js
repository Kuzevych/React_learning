import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
    render() {
        const { item } = this.props;
        return (
            <div>
                <span>{ item }</span>
            </div>
        );
    }
}

Item.propTypes = {
    item: PropTypes.string.isRequired,
};

export default Item;