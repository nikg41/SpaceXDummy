import {
    SAVE_EMAIL,
    SAVE_LOGIN,
    LOGOUT,
    STORE_DATA
} from '../constants';

const initialState = {
    email: '',
    isLoggedIn: false,
    spaceXData: {}
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
        case LOGOUT:
            return {
                ...initialState
            }
        case STORE_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}
export default userDetailsreducer;