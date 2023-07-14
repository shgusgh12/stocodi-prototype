import { createSlice } from "@reduxjs/toolkit";

const API_URL = "http://localhost:8080/api/user/interest";

export const interestSlice = createSlice({
    name: "interest-slice",

    initialState: {
        status: null,
        data: null,
    },

    reducers: {
        setState: (state, action) => {
            state.status = action.payload.status;
            state.data = action.payload.data;
        },
    },
});

export const interestDataFetchThunk = () => {
    return async (dispatch) => {
        dispatch(
            interestActions.setState({
                status: "fetching",
                data: null,
            })
        );

        const request = async () => {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error("Interest Data Fetch Failed");
            return response.json();
        };

        try {
            const data = await request();
            dispatch(
                interestActions.setState({
                    status: "success",
                    data: data,
                })
            );
        } catch (error) {
            dispatch(
                interestActions.setState({
                    status: "failed",
                    data: null,
                })
            );
        }
    };
};

export const interestActions = interestSlice.actions;
