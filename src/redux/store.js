import { createStore, combineReducers, applyMiddleware } from 'redux';
import { DishReducer } from './DishesReducer.js';
import { CommentReducer } from './CommentsReducer.js';
import { PromotionReducer } from './PromotionsReducer.js';
import { LeaderReducer } from './leadersReducer.js';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const Store = () => {
    const store = createStore(
        combineReducers({
            dishes: DishReducer,
            comments: CommentReducer,
            promotions: PromotionReducer,
            leaders: LeaderReducer
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};