import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getList } from '../actions';

class List extends Component {
    componentDidMount() {
        this.props.getList();
    };

    render() {   
        console.log('props:', this.props);   
        const itemElements = this.props.list.map((item, index) => {
            return <li key={index} className="collection-item">{item.title}</li>
        });
        return (
            <ul className="collection">
                {itemElements}               
            </ul>
        );
    };
};

function mapStateToProps(state) {
    return {
        list: state.list.items
    };
};

export default connect(mapStateToProps, { getList })(List);