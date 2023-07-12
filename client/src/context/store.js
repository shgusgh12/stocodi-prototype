import { configureStore } from "@reduxjs/toolkit";

import { stockSlice } from "./stock-slice";

export const store = configureStore({
    reducer: {
        stock: stockSlice.reducer,
    },
});
