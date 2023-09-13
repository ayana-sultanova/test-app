import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchRouteSuccess, fetchRouteFailure } from '../actions/routeActions'

function* fetchRoute(action: any) : Generator<any, void, any> {
    try {
        const selectedRoute = action.payload;
        const { params_1, params_2, params_3 } = selectedRoute;
        const response = yield call(fetch, `http://router.project-osrm.org/table/v1/driving/${params_1};${params_2};${params_3}`);
        const data = yield response.json();
        yield put(fetchRouteSuccess(data.destinations));
    } catch (error: any) {
        yield put(fetchRouteFailure(error.message));
    }
}

function* routeSaga() {
    yield takeLatest('SELECT_ROUTE', fetchRoute);
}

export default routeSaga;