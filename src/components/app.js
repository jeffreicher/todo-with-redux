import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import List from './list';
import AddForm from './add-form';
import ItemView from './item-view';
import { Route } from 'react-router-dom';

const App = () => (
    <div className="container">
        <h1 className="center">To Do List</h1>
        <Route exact path ="/" component={List} />
        <Route path="/add-item" component={AddForm} />
        <Route path="/item/:id" component={ItemView} />
    </div>
);

export default App;
