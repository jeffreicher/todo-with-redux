import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app';
import rootReducer from './reducers';
import logger from './middleware/logger';
import promise from './middleware/promise';
import { BrowserRouter as Router } from 'react-router-dom';

const store = createStore(rootReducer, {}, applyMiddleware(logger, promise));

ReactDOM.render(
    <Provider store={store}>
    <Router>
        <App />
    </Router>        
    </Provider>,
    document.getElementById('root')
);
