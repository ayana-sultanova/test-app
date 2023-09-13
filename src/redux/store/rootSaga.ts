import { all } from 'redux-saga/effects';
import routeSaga from '../sagas/routeSaga';

function* rootSaga() {
    yield all([routeSaga()]);
}

export default rootSaga;