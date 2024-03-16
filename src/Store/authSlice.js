import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true
            state.userData = action.payload.userData;
        },
        //here login and logout are known as actions
        logout: (state) => { //here we get bothe state and actions parameters but in this case actions was not needed so not  mentioned
            state.status = false;
            state.userData = null;
        }
    }
})

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;