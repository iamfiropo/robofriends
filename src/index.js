import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
// import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { searchRobots, requestRobots } from './reducers';
import 'tachyons';
import{ rootSaga } from './sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({ searchRobots, requestRobots })
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

// then run the saga
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, 
                document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
