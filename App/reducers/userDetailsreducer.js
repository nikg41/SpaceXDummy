import {
    SAVE_EMAIL
} from '../constants';

const initialState = {
    email: ''
};
const userDetailsreducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_EMAIL:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}
export default userDetailsreducer;