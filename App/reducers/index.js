import userDetailsreducer from "./userDetailsreducer";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import AsyncStorage from '@react-native-async-storage/async-storage';
const userDetailsCongig = {
    key: 'userDetails',
    storage: AsyncStorage,
}

export default {
    userDetails: persistReducer(userDetailsCongig, userDetailsreducer)
}