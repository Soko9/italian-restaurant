import * as ActionTypes from './ActionTypes.js';

export const FeedbackReducer = (state = {
        err: null,
        feedbacks: []
    }, action) => {
        switch(action.type) {
            case ActionTypes.POST_FEEDBACK:
                var feedback = action.payload;
                return {...state, feedbacks: state.feedbacks.concat(feedback)}
            case ActionTypes.ADD_FEEDBACKS:
                return {...state, err: null, feedbacks: action.payload}
            case ActionTypes.COMMENTS_FAILED:
                return {...state, err: action.payload, feedbacks: [], feedbacks: []}
            default:
                return state;
        }
}