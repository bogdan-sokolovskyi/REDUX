//global endpoints
const GLOBAL_PATH_API = '/api';
const GLOBAL_PATH_CORE = `${GLOBAL_PATH_API}/core`;
const GLOBAL_PATH_TASKS = `${GLOBAL_PATH_API}/tasks`;

//endpoints for core module
export const GET_ACCOUNT = `${GLOBAL_PATH_CORE}/account`;
export const GET_ACCOUNTS = `${GLOBAL_PATH_CORE}/account`;
export const GET_ALL_ACCOUNT_DOCUMENTS = `${GLOBAL_PATH_CORE}/account-document`;
export const GET_ALL_ACCOUNT_ENUMS = `${GET_ACCOUNT}/get-enums/`;

export const GET_TASKS = `${GLOBAL_PATH_TASKS}/tasks`;
export const GET_TASK = `${GLOBAL_PATH_TASKS}/tasks`;
