import * as ActionTypes from './ActionTypes.js';

export const FeedbackReducer = (state = {
        err: null,
        feedbacks: []
    }, action) => {
        switch(action.type) {
            case ActionTypes.POST_FEEDBACK:
                var feedback = action.payload;
                setTimeout(() => {
                    alert(JSON.stringify(feedback));
                }, 2500);
                return {...state, feedbacks: state.feedbacks.concat(feedback)}
            case ActionTypes.ADD_FEEDBACKS:
                return {...state, err: null, feedbacks: action.payload}
            case ActionTypes.COMMENTS_FAILED:
                return {...state, err: action.payload, feedbacks: []}
            default:
                return state;
        }
}