import { configureStore } from "@reduxjs/toolkit";
import AppReducer from "./Appslice";

export const store = configureStore({
    reducer:{
        app:AppReducer
    }
})