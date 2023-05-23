import { createSlice } from "@reduxjs/toolkit";


export const { actions: userAction, reducer: userReducer } = createSlice({

    name: "user",
    initialState: {
        user: localStorage.getItem("users") && JSON.parse(localStorage.getItem("users"))
    },
    recducers: {
        changeUser: (state, { payload }) => {
            state.user = payload;
            console.log(payload);
            localStorage.setItem("users", JSON.stringify(payload))

        }
    }
})