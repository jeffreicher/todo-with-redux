import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSingleItem, markComplete, deleteItem } from '../actions';

class ItemView extends Component {


    componentDidMount() {
        this.props.getSingleItem(this.props.match.params.id);
    };

    completeTask() {
        console.log('Event:', this.props)
        this.props.markComplete(this.props.match.params.id);
    }

    delete() {
        console.log('Event:', this.props);
        this.props.deleteItem(this.props.match.params.id);
    }



    render() {
        const { item } = this.props;
        console.log('item', item);

        const i = new Date(item.completed*1);
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        const month = months[i.getMonth()];
        const date = i.getDate();
        const year = i.getFullYear();
        const hour = i.getHours();
        const min = i.getMinutes();
        const time = date + ' ' + month + ' ' + year + ' - ' + hour + ':' + min;
        
        console.log('date', date);
        return (
            <div>
                <Link className="btn" to="/">View Full List</Link>
                <h3>Title: {item.title}</h3>
                <p>Details: {item.details}</p>
                <p>Completed: {(item.complete) ? 'Yes' : 'No'}</p>
                <p>Timestamp: {'' + time}</p>

                <Link to="/" className="btn green darken-3" onClick={this.completeTask.bind(this)}>Completed</Link>
                <Link to="/" className="btn red darken-3" onClick={this.delete.bind(this)}>Delete</Link>                
            </div>
        );
    };
};

function mapStateToProps(state) {
    return {
        item: state.list.singleItem
    };
};

export default connect(mapStateToProps, { getSingleItem, markComplete, deleteItem })(ItemView);