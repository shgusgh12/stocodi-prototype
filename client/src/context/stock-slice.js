import { createSlice } from "@reduxjs/toolkit";

const API_URL = "http://localhost:8080/api/stock/pastprice";

export const stockSlice = createSlice({
    name: "stock-slice",

    initialState: {
        status: null,
        data: [],
    },

    reducers: {
        setState: (state, action) => {
            state.status = action.payload.status;
            state.data = action.payload.data;
        },
    },
});

export const pastDataFetchThunk = () => {
    return async (dispatch) => {
        dispatch(
            stockActions.setState({
                status: "fetching",
                data: [],
            })
        );

        const request = async () => {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error("Stock Data Fetching Failed");
            return await response.json();
        };

        try {
            const data = await request();
            dispatch(
                stockActions.setState({
                    status: "success",
                    data: data,
                })
            );
        } catch (error) {
            dispatch(
                stockActions.setState({
                    status: "failed",
                    data: [],
                })
            );
        }
    };
};

export const realTimeDataFetchThunk = () => {};

export const stockActions = stockSlice.actions;
