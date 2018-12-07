import * as actions from './actionTypes';

const initialState = {
    task: true,
};

export default function (state = initialState, action) {
    switch (action.type) {

        case actions.SET_TASK_LIST:
            return {
                ...state,
                task: action.data,
            };
        default:
            return state;
    }
}
