import { combineReducers } from 'redux';
import user from '../containers/user/reducer';
import dashboard from '../containers/dashboard/reducer';
import clients from '../containers/clients/reducer';
import tasks from '../containers/tasks/reducer';
import taskList from '../containers/taskList/reducer';
import errors from './services/RequestService/reducer';
import { localizeReducer as localize } from 'react-localize-redux';

export default combineReducers({
    user,
    localize,
    dashboard,
    clients,
    tasks,
    taskList,
    errors,
});
