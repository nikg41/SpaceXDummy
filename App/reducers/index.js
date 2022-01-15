import userDetailsreducer from "./userDetailsreducer";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const userDetailsCongig = {
    key: 'userDetails',
    storage,
}

export default {
    userDetails: persistReducer(userDetailsCongig, userDetailsreducer)
}