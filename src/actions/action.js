import {FETCH_USER_INFO_REQUEST, FETCH_USER_INFO_SUCCESS, FETCH_USER_INFO_ERROR, UPDATE_USER_INFO_REQUEST, UPDATE_USER_INFO_SUCCESS, UPDATE_USER_INFO_ERROR, RESOLVE_UPDATE_USER_INFO_ERROR} from './actionTypes';

export function fetchUserInfoRequest() {
    return {
        type: FETCH_USER_INFO_REQUEST
    };
}

export function fetchUserInfoSuccess(user) {
    return {
        type: FETCH_USER_INFO_SUCCESS,
        payload: {user}
    };
}

export function fetchUserInfoError(error) {
    return {
        type: FETCH_USER_INFO_ERROR,
        payload: {error}
    };
}

export function updateUserInfoRequest() {
    return {
        type: UPDATE_USER_INFO_REQUEST,
    };
}

export function updateUserInfoSuccess(user) {
    return {
        type: UPDATE_USER_INFO_SUCCESS,
        payload: {user}
    };
}

export function updateUserInfoError(error) {
    return {
        type: UPDATE_USER_INFO_ERROR,
        payload: {error}
    };
}

export function resolveUpdateUserInfoError() {
    return {
        type: RESOLVE_UPDATE_USER_INFO_ERROR
    };
}

