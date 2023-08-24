import {createSlice} from "@reduxjs/toolkit";


const photosSlice = createSlice({
    name: 'photos',
    initialState: {
        data: []
    },
    reducers: {
        addPhoto () {

        },
        removePhoto () {

        },
    },
});

export const photosReducer = photosSlice.reducer;