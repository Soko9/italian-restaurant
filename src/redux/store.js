import { createStore } from 'redux';
import { Reducer, initialState } from './reducer.js';

export const Store = () => {
    const store = createStore(
        Reducer,
        initialState
    );

    return store;
};