import {
    SAVE_PHONE_NUMBER,
    SAVE_USER_DETAILS
} from '../constants';

const initialState = {
    phoneNumber: '',
    countryCode: '',
    name: '',
    profilePic: {},
    dob: '',
};
const userDetailsreducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_PHONE_NUMBER:
            return {
                ...state,
                ...action.payload
            };
        case SAVE_USER_DETAILS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}
export default userDetailsreducer;