import * as ActionTypes from './ActionTypes.js';
import { DISHES } from '../shared/dishes.js';

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

export const fetchDishes = () => (dispatch) => {
    dispatch(dishLoading(true));
    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
}

export const dishLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishFailed = (err) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: err
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});