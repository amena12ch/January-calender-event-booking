import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './store/rootReducer';

import App from './components/App';

import './style.css'
const middleware = applyMiddleware(thunk);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducer, composeEnhancers(
    middleware
))

ReactDOM.render(     
<Provider store={store}>
  <React.StrictMode>
       <App />
  </React.StrictMode>
</Provider>,
  document.getElementById('root')
);
