import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const moviesSlice = createSlice({
    name: "movies",
    initialState: [],
    reducers: {
        addMovie(state, action) {
            state.push(action.payload);
        },
        removeMovie(state, action) {
            const targetIndex = state.indexOf(action.payload);
            state.splice(targetIndex, 1);
        },
        resetMovies(state, action) {
            return [];
        }
    },
    extraReducers(builder) {
        builder.addCase(reset, (state, action) => {
            return [];
        });
    }
});

export const { addMovie, removeMovie, resetMovies } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
