import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        firstName: "",
        lastName: "",
        username: "",
        mobile: "",
        enableNotifications: true,
    },

    reducers: {
        getUser: (state, action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.username = action.payload.username;
            state.mobile = action.payload.mobile;
            state.enableNotifications = action.payload.enableNotifications;
        }
    }
})

export const {getUser} = userSlice.actions;

export default userSlice.reducer;