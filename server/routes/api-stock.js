import express from "express";

let router = express.Router();

router.get("/pastprice", (request, response) => {
    response.json([
        {
            time: "2023-07-12 15:19",
            data: {
                open: "5678",
                high: "9876",
                low: "1234",
                close: "3456",
            },
        },
        {
            time: "2023-07-12 15:21",
            data: {
                open: "5678",
                high: "9876",
                low: "1234",
                close: "3456",
            },
        },
        {
            time: "2023-07-12 15:22",
            data: {
                open: "5678",
                high: "9876",
                low: "1234",
                close: "3456",
            },
        },
        {
            time: "2023-07-12 15:23",
            data: {
                open: "5678",
                high: "9876",
                low: "1234",
                close: "3456",
            },
        },
        {
            time: "2023-07-12 15:24",
            data: {
                open: "5678",
                high: "9876",
                low: "1234",
                close: "3456",
            },
        },
    ]);
});

export default router;
