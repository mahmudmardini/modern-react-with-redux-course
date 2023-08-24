import {configureStore} from "@reduxjs/toolkit";
import {usersReducer} from "./slices/UsersSlice";

const store = configureStore({
    reducer: {
        usersReducer,
    },
});

export { store };