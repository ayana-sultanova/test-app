import { createReducer } from '@reduxjs/toolkit';
import { selectRoute, fetchRouteSuccess, fetchRouteFailure } from '../actions/routeActions';
import {RouteType} from "../../types/types";

interface RouteState {
    selectedRoute: RouteType | null | undefined;
    routeData: any;
    error: string | null | undefined;
    loading: boolean
}

const initialState: RouteState = {
    selectedRoute: null,
    routeData: null,
    error: null,
    loading: false
};

export const routeReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(selectRoute, (state, action) => {
            state.loading = true
            state.selectedRoute = action.payload;
            state.routeData = null;
            state.error = null;
        })
        .addCase(fetchRouteSuccess, (state, action) => {
            state.loading = false
            state.routeData = action.payload;
            state.error = null;
        })
        .addCase(fetchRouteFailure, (state, action) => {
            state.loading = false
            state.routeData = null;
            state.error = action.payload;
        });
});

