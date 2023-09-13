import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    loading: false,
    error: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userRegistered: (state, action) => {
            state.user = action.payload;
            state.loading = false;
            state.error = null;
        },
        registeredFailed: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { userRegistered, registeredFailed } = userSlice.actions;
export default userSlice.reducer;