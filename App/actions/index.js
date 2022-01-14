import { SAVE_PHONE_NUMBER, SAVE_USER_DETAILS } from '../constants';


export const savePhoneNumber = (payload) => {
    return {
        type: SAVE_PHONE_NUMBER,
        payload: payload
    }
}

export const saveUserDetails = (payload) => {
    return {
        type: SAVE_USER_DETAILS,
        payload: payload
    }
}