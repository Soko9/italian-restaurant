import * as ActionTypes from './ActionTypes.js';
import { url } from '../shared/connection.js';

// POST COMMENT

export const addComment = comment => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (dishId, rating, author, comment) => dispatch => {
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
    newComment.date = new Date().toISOString();

    return fetch(`${url}/comments`, {
            method: 'POST',
            body: JSON.stringify(newComment),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
        .then(res => {
            if (res.ok)
                return res;
            else {
                var error = new Error(`Error ${res.status}: ${res.statusText}`);
                error.response = res;
                throw error;
            }
        }, error => {
            var errMsg = new Error(error.message);
            throw errMsg;
        })
        .then(res => res.json())
        .then(res => dispatch(addComment(res)))
        .catch(err => {
            alert(`Error Posting Comment: ${err.message}`)
        });
}

// DISHES

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

export const fetchDishes = () => (dispatch) => {
    dispatch(dishLoading());
    return fetch(`${url}/dishes`)
        .then(res => {
            if (res.ok)
                return res;
            else {
                var error = new Error(`Error ${res.status}: ${res.statusText}`);
                error.response = res;
                throw error;
            }
        }, error => {
            var errMsg = new Error(error.message);
            throw errMsg;
        })
        .then(res => res.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(err => dispatch(dishFailed(err.message)));
}

// COMMENTS

export const commentFailed = (err) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: err
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchComments = () => (dispatch) => {
    return fetch(`${url}/comments`)
        .then(res => {
            if (res.ok)
                return res;
            else {
                var error = new Error(`Error ${res.status}: ${res.statusText}`);
                error.response = res;
                throw error;
            }
        }, error => {
            var errMsg = new Error(error.message);
            throw errMsg;
        })
        .then(res => res.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(err => dispatch(commentFailed(err.message)));
}

// PROMOTIONS

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (err) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: err
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading());
    return fetch(`${url}/promotions`)
        .then(res => {
            if (res.ok)
                return res;
            else {
                var error = new Error(`Error ${res.status}: ${res.statusText}`);
                error.response = res;
                throw error;
            }
        }, error => {
            var errMsg = new Error(error.message);
            throw errMsg;
        })
        .then(res => res.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(err => dispatch(promosFailed(err.message)));
}