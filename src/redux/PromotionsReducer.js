import { PROMOTIONS } from '../shared/promotions.js';

export const PromotionReducer = (state = PROMOTIONS, action) => {
    switch(action.type) {
        default:
            return state;
    }
}