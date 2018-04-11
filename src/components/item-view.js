import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSingleItem, markComplete, deleteItem } from '../actions';

//after delete, next time doesn't have time completed. Need to empty?

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

    currentTime() {    
        const x = new Date();
            return (
                `${ ((x.getHours() < 10)?"0":"") +
                 x.getHours() +":"+ 
                 ((x.getMinutes() < 10)?"0":"") + 
                 x.getMinutes() +":"+ 
                 ((x.getSeconds() < 10)?"0":"") + 
                 x.getSeconds()}`
            )         
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
        const timeNow = this.currentTime();



    //     Date.prototype.timeNow = function () {
    //         return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
    //    }
        
        const spacing = {
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '4vh'
        };                
        console.log('time', timeNow);
        return (
            <div>
                <Link className="btn" to="/">View Full List</Link>
                <h4>Title: {item.title}</h4>
                <p>Details: {item.details}</p>
                <p>Completed: {(item.complete) ? 'Yes' : 'No'}</p>
                <p>Time Started: {(timeNow === this.currentTime()) ? timeNow : 'NA'}</p>
                <p>Time End: {(item.complete) ? '' + time : 'Incomplete'}</p>
                <div style={spacing}>
                    <button className="btn green darken-3" onClick={this.completeTask.bind(this)}>Complete</button>
                    <Link to="/" className="btn red darken-3" onClick={this.delete.bind(this)}>Delete</Link>                    
                </div>
                
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