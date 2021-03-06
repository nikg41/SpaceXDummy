import {
    SAVE_EMAIL,
    SAVE_LOGIN,
    LOGOUT,
    STORE_DATA,
    EMPTY_DATA,
    SOCIAL_LOGIN
} from '../constants';

const initialState = {
    email: '',
    isLoggedIn: false,
    spaceXData: {},
    socialLogin: false,
    socialLoginType: ""
};
const userDetailsreducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_EMAIL:
            return {
                ...state,
                ...action.payload
            };
        case SAVE_LOGIN:
            return {
                ...state,
                isLoggedIn: true
            }
        case SOCIAL_LOGIN:
            return {
                ...state,
                ...action.payload,
                isLoggedIn: true,
                socialLogin: true
            }
        case LOGOUT:
            return {
                ...initialState
            }
        case STORE_DATA:
            return {
                ...state,
                ...action.payload
            }
        case EMPTY_DATA:
            return {
                ...state,
                spaceXData: {}
            }
        default:
            return state;
    }
}
export default userDetailsreducer;