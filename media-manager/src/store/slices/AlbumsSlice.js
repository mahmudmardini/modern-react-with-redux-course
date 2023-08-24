import {createSlice} from "@reduxjs/toolkit";


const albumsSlice = createSlice({
    name: 'albums',
    initialState: {
        data: []
    },
    reducers: {
        addAlbum () {

        },
        removeAlbum () {

        },
    },
});

export const albumsReducer = albumsSlice.reducer;