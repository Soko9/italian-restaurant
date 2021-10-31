import { DISHES } from '../shared/dishes.js';

export const DishReducer = (state = DISHES, action) => {
    switch(action.type) {
        default:
            return state;
    }
}