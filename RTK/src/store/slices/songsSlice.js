import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const songsSlice = createSlice({
    name: "songs",
    initialState: [],
    reducers: {
        addSong(state, action) {
            state.push(action.payload);
        },
        removeSong(state, action) {
            const targetIndex = state.indexOf(action.payload);
            state.splice(targetIndex, 1);
        },
        resetSongs(state, action) {
            return [];
        }
    },
    extraReducers(builder) {
        builder.addCase(reset, (state, action) => {
            return [];
        });
    }
});

export const { addSong, removeSong, resetSongs } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;
