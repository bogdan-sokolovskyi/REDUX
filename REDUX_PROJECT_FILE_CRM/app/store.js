import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from './reducer';

const middleware = process.env.NODE_ENV === 'production' ?
    [thunk] :
    [thunk, logger];

export default createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);
