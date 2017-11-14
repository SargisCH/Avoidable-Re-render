import React from 'react';
import {render} from 'react-dom';
import App from './components';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
console.log(thunk);
let store = createStore(combineReducers(reducers), applyMiddleware(thunk));
{
    let createClass = React.createClass;
    Object.defineProperty(React, 'createClass', {
        set: (nextCreateClass) => {
            createClass = nextCreateClass;
        }
    });
}
const { whyDidYouUpdate } = require('why-did-you-update')
whyDidYouUpdate(React)

render(<Provider store={store}><App/></Provider>, document.getElementById('root'));