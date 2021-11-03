import { createStore, combineReducers, applyMiddleware } from 'redux';
import { DishReducer } from './DishesReducer.js';
import { CommentReducer } from './CommentsReducer.js';
import { PromotionReducer } from './PromotionsReducer.js';
import { LeaderReducer } from './leadersReducer.js';
import { FeedbackReducer } from './FeedbacksReducer.js';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms.js';

export const Store = () => {
    const store = createStore(
        combineReducers({
            dishes: DishReducer,
            comments: CommentReducer,
            promotions: PromotionReducer,
            leaders: LeaderReducer,
            feedbacks: FeedbackReducer,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};