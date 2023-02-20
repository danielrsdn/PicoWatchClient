import { FETCH_USER_INFO_REQUEST, FETCH_USER_INFO_SUCCESS, FETCH_USER_INFO_ERROR, UPDATE_USER_INFO_REQUEST, UPDATE_USER_INFO_SUCCESS, UPDATE_USER_INFO_ERROR, RESOLVE_UPDATE_USER_INFO_ERROR } from "../actionTypes";
import {fetchUserRequest, updateUserRequest} from "../fetchData";

let initialState = {
    fetchUserLoading: false,
    updateUserLoading: false,
    user: {
        username: "",
        firstName: "",
        lastName: "",
        mobile: "",
        enableNotifications: false
    },
    fetchUserError: null,
    updateUserError: null

};

function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_USER_INFO_REQUEST:
            return  {
                ...state,
                fetchUserLoading: true,
                fetchUserError: null
            };

        case UPDATE_USER_INFO_REQUEST:
            return  {
                ...state,
                updateUserLoading: true,
                updateUserError: null
            };

        case FETCH_USER_INFO_SUCCESS:
            return {
                ...state,
                fetchUserLoading: false,
                user: action.payload.user
            };
        
        case UPDATE_USER_INFO_SUCCESS:
            return {
                ...state,
                updateUserLoading: false,
                user: action.payload.user
            };
        
        case FETCH_USER_INFO_ERROR:
            return {
                ...state,
                fetchUserLoading: false,
                fetchUserError: action.payload.error,
            };
        
        case UPDATE_USER_INFO_ERROR:
            return {
                ...state,
                updateUserLoading: false,
                updateUserError: action.payload.error,
            };
        
        case RESOLVE_UPDATE_USER_INFO_ERROR:
            return {
                ...state,
                updateUserError: null,
            };
                
        default: 
            return state;
        }
}

export function fetchUserInfo(dispatch, getState) {
    fetchUserRequest(dispatch);
}

export function updateUserInfo(dispatch, updatedUserInfo) {
    updateUserRequest(dispatch, updatedUserInfo);
}


export default reducer;