import { LEADERS } from '../shared/leaders.js';

export const LeaderReducer = (state = LEADERS, action) => {
    switch(action.type) {
        default:
            return state;
    }
}