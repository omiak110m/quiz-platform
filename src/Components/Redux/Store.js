
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import reducer from './Reducer'

// to combine the reducers but we have only one reducer

const rootReducer = combineReducers({
    reducer,
});

// this is the final store which our app will use

const store = configureStore({
    reducer: rootReducer
});

export default store;