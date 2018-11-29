import React, { Suspense, lazy } from 'react';
import DataStorage from './helpers/DataStorage';
import { Route, Switch } from "react-router-dom";

//components
import Lead from "./components/Leads";
// import ErrorPage from "./layouts/ErrorPage";
// import Calendar from "./components/Calendar";
// import Task from "./components/TaskPage/Task";
import Tasks from "../containers/tasks/components/Tasks";
// import Profile from "./components/Settings/Profile";
// import AccessDeniedPage from "./layouts/AccessDeniedPage";
import Clients from "../containers/clients/components/Clients";
// import ResetPassword from "./components/AuthPage/ResetPassword";
// import CreateClient from "./components/Leads/CreateClient";
// import ManagerCreateForm from "./components/Settings/ManagerCreateForm";
// import AdminViewList from "./components/AdminViewList";
// import Interaction from "./components/Leads/Interaction";
// import Dashboard from "../containers/dashboard/Dashboard";

//services
import LangService from './services/LangService';
import AuthService from "./services/AuthService";

//Lazy load from chunk
// const Lead = lazy(() => import('./components/Leads'));
const ErrorPage = lazy(() => import('./layouts/ErrorPage'));
//const Tasks = lazy(() => import('../containers/tasks/components/Tasks'));
const Calendar = lazy(() => import('./components/Calendar'));
const Task = lazy(() => import('./components/TaskPage/Task'));
const AdminViewList = lazy(() => import('./components/AdminViewList'));
const Interaction = lazy(() => import('./components/Leads/Interaction'));
const Dashboard = lazy(() => import('../containers/dashboard/Dashboard'));
const AccessDeniedPage = lazy(() => import('./layouts/AccessDeniedPage'));
const CreateClient = lazy(() => import('./components/Leads/CreateClient'));
// const Clients = lazy(() => import('../containers/clients/components/Clients'));
const ResetPassword = lazy(() => import('./components/AuthPage/ResetPassword'));
const ManagerCreateForm = lazy(() => import('./components/Settings/ManagerCreateForm'));

export default (store) => {
    DataStorage.init();
    AuthService.init(store);
    LangService.init(store);

    return (
        <Suspense fallback = { <div>Loading...</div> }>
            <Switch>
                <Route exact component = { Dashboard } path = '/' />

                <Route component = { Lead } path = '/leads' />
                <Route component = { Tasks } path = '/tasks' />
                <Route component = { Clients } path = '/clients' />
                <Route component = { Interaction } path = '/test' />
                <Route component = { Calendar } path = '/calendar' />
                <Route component = { ResetPassword } path = '/reset' />
                <Route component = { AdminViewList } path = '/settings' />
                <Route component = { Lead } path = '/lead/:id' />
                <Route component = { Task } path = '/profile/:token' />
                <Route component = { AccessDeniedPage } path = '/access' />
                <Route component = { AccessDeniedPage } path = '/reports' />
                <Route component = { CreateClient } path = '/clientCreate' />
                <Route component = { ManagerCreateForm } path = '/managerCreate' />

                <Route component = { ErrorPage } />
            </Switch>
        </Suspense>
    );
};
