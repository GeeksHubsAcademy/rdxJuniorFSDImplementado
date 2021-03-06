
import {applyMiddleware, createStore} from 'redux';
import { save, load } from "redux-localstorage-simple";
import reducer from './reducers/rootReducer';

const createStoreWithMiddleware = applyMiddleware(
	save({ state: ["datosUser"] })
)(createStore);

const store = createStoreWithMiddleware(
    reducer,
    load({
        preloadState : {
            datosUser : ''
        },
        states: ["datosUser"]
    })
    /* window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
        trace: true,
    }) */
);

export default store;