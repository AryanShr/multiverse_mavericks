import { configureStore, createSlice, combineReducers } from '@reduxjs/toolkit'
import {persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
} from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key:"root",
    version:1,
    storage
}
const loginSlice = createSlice({
    name: "login",
    initialState: {isLoggedIn:false},
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
        }
    }
});

export const loginAction = loginSlice.actions

export const store = configureStore({
    reducer:loginSlice.reducer
})