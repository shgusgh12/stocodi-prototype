import { configureStore } from "@reduxjs/toolkit";

import { stockSlice } from "./stock-slice";
import { interestSlice } from "./interest-slice";

export const store = configureStore({
    reducer: {
        stock: stockSlice.reducer,
        interest: interestSlice.reducer,
    },
});
