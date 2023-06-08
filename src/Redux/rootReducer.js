import profileReducer from "./profileReducer";
import { combineReducers } from "@reduxjs/toolkit";
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    profilePage: profileReducer,
    form: formReducer
});

export default rootReducer