import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSingleItem } from '../actions';

class ItemView extends Component {


    componentDidMount() {
        this.props.getSingleItem(this.props.match.params.id);
    };

    render() {
        const { item } = this.props;
        console.log('ItemView Props:', this.props.match.params.id);
        return (
            <div>
                <Link className="btn" to="/">View Full List</Link>
                <h3>{item.title}</h3>
                <p>{item.details}</p>
            </div>
        );
    };
};

function mapStateToProps(state) {
    return {
        item: state.list.singleItem
    };
};

export default connect(mapStateToProps, { getSingleItem })(ItemView);