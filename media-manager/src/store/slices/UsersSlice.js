import {createSlice} from "@reduxjs/toolkit";


const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: []
    },
    reducers: {
        addUser () {

        },
        removeUser () {

        },
    },
});

export const usersReducer = usersSlice.reducer;