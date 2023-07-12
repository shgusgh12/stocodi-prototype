import express from "express";
import cors from "cors";

const app = express();
const PORT = 8080;

app.use(cors());

app.get("/api/stock/pastprice", (request, response) => {
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

app.listen(PORT, () => {
    console.log(`Test Server Listening on PORT ${PORT}`);
});
