import { securedRequest } from '../../../app/services/RequestService';
import { GET_TASKS } from '../../../app/api_routes_list';
import { setAllTasks } from "../actions";

export const getAllTasks = (params = '') => (dispatch) => {
  return securedRequest.get(`${GET_TASKS}?${params}`)
    .then((response) => {
      dispatch(setAllTasks(response.data));
    })
    .catch((error) => {
      console.log('error', error);
    });
};

