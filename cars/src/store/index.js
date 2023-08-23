import {configureStore} from "@reduxjs/toolkit";
import {carListReducer, addCar, removeCar, changeSearchTerm} from "./slices/carListSlice";
import {carCreationReducer, changeName, changeCost} from "./slices/carCreationSlice";

const store = configureStore({
    reducer: {
        cars: carListReducer,
        carCreation: carCreationReducer,
    },
});

export { store, changeName, changeCost, addCar, removeCar, changeSearchTerm};