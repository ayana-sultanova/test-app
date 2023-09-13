import { combineReducers } from 'redux';
import { routeReducer } from '../reducers/routeReducer';

const rootReducer = combineReducers({
    routeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;