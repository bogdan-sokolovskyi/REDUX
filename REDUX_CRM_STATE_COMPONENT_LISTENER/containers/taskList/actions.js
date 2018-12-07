import * as actions from './actionTypes';


export const setTaskList = (data) => ({
  type: actions.SET_TASK_LIST,
  data,
});

export const getTaskList = (data) => (dispatch) => {
  dispatch(setTaskList(data));
};
