import {createSlice, nanoid} from '@reduxjs/toolkit';

const carListSlice = createSlice({
    name: 'carList',
    initialState: {
        searchTerm: '',
        list: []
    },
    reducers: {
        changeSearchTerm (state, action) {
            state.searchTerm = action.payload
        },
        addCar (state, action) {
            state.list.push({
                id: nanoid(),
                name: action.payload.name,
                cost: action.payload.cost,
            });
        },
        removeCar (state, action) {
            state.list = state.list.filter((car) => {
                return car.id !== action.payload;
            })
        },
    },
});

export const { changeSearchTerm, addCar, removeCar } = carListSlice.actions;
export const carListReducer = carListSlice.reducer;
