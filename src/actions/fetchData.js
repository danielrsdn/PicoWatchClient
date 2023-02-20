import { wait } from "@testing-library/user-event/dist/utils";
import {fetchUserInfoError, fetchUserInfoRequest, fetchUserInfoSuccess, updateUserInfoRequest, updateUserInfoSuccess, updateUserInfoError } from "./action"

export function fetchUserRequest(dispatch) {
    dispatch(fetchUserInfoRequest());
    fetch("https://ljgqi1zvt4.execute-api.us-west-2.amazonaws.com/v1/user", {
        method: "GET",
        headers: {
            "session_id": "217b0306-eac7-4c95-bdf1-0bcfb1f15841",
        }

    }).then((response) => {
        if (!response.ok) {
            return response.text().then((msg) => {
                dispatch(fetchUserInfoError(msg));
            })
        }
        else {
            return response.json().then((data => {
                dispatch(fetchUserInfoSuccess(data));
            }))
        }

    }, 
    (error) => {
        console.error('Problem with fetch User operation', error);
        dispatch(fetchUserInfoError(error));
    });
}

export function updateUserRequest(dispatch, updatedUserInfo) {
    dispatch(updateUserInfoRequest());
    fetch("https://ljgqi1zvt4.execute-api.us-west-2.amazonaws.com/v1/update", {
        method: "PUT",
        headers: {
            "session_id": "217b0306-eac7-4c95-bdf1-0bcfb1f15841",
        },

        body: JSON.stringify(updatedUserInfo)

    }).then((response) => {
        if (!response.ok) {
            dispatch(updateUserInfoError(response.status));
        }
        else {
            dispatch(updateUserInfoSuccess(updatedUserInfo));
        }

    }, 
    (error) => {
        console.error('Problem with fetch User operation', error);
        dispatch(updateUserInfoError(error));
    });
}