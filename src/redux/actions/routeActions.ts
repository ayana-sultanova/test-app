import { createAction } from '@reduxjs/toolkit';

export const selectRoute = createAction('SELECT_ROUTE');
export const fetchRouteSuccess = createAction('FETCH_ROUTE_SUCCESS');
export const fetchRouteFailure = createAction('FETCH_ROUTE_FAILURE');