import * as actions from './actionTypes';

export default function (state = {}, action) {
    switch (action.type) {
        case actions.SET_TASKS:
            return {
                ...state,
                ...state.tasks,
                'data':  action.data.data,
                'total': action.data.params.total_count,
            };
        case actions.SET_TASK:
            return {
                ...state,
                ...state.tasks,
                'task': action.data,
            };
        default:
            return state;
    }
}
