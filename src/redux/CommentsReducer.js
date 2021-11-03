import * as ActionTypes from './ActionTypes.js';

export const CommentReducer = (state = {
        err: null,
        comments: []
    }, action) => {
        switch(action.type) {
            case ActionTypes.ADD_COMMENT:
                var comment = action.payload;
                return {...state, comments: state.comments.concat(comment)};
            case ActionTypes.ADD_COMMENTS:
                return {...state, err: null, comments: action.payload};
            case ActionTypes.COMMENTS_FAILED:
                return {...state, err: action.payload, comments: []};
            default:
                return state;
        }
}