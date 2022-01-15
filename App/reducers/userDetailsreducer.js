import {
    SAVE_EMAIL,
    SAVE_LOGIN
} from '../constants';

const initialState = {
    email: '',
    isLoggedIn: false
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
        default:
            return state;
    }
}
export default userDetailsreducer;