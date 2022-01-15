import { SAVE_EMAIL } from '../constants';


export const saveEmail = (payload) => {
    return {
        type: SAVE_EMAIL,
        payload: payload
    }
}
