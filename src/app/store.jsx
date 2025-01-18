import userReducer from "@/slices/userSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer:{
        userInfo : userReducer
    }
})

export default store;