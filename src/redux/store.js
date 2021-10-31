import { createStore, combineReducers } from 'redux';
import { DishReducer } from './DishesReducer.js';
import { CommentReducer } from './CommentsReducer.js';
import { PromotionReducer } from './PromotionsReducer.js';
import { LeaderReducer } from './leadersReducer.js';

export const Store = () => {
    const store = createStore(
        combineReducers({
            dishes: DishReducer,
            comments: CommentReducer,
            promotions: PromotionReducer,
            leaders: LeaderReducer
        })
    );

    return store;
};