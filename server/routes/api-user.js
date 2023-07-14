import express from "express";

let router = express.Router();

router.get("/interest", (request, response) => {
    response.json([
        {
            rank: "#1",
            ticker: "삼성전자",
            currentPrice: 55100,
            fluctuations: 11.8,
        },
        {
            rank: "#2",
            ticker: "애플",
            currentPrice: 395762,
            fluctuations: 4.31,
        },
        {
            rank: "#3",
            ticker: "INVSC QQQ TRUST SRS",
            currentPrice: 33156,
            fluctuations: -5.43,
        },
        {
            rank: "#4",
            ticker: "NVDIA",
            currentPrice: 451363,
            fluctuations: -0.14,
        },
        {
            rank: "#5",
            ticker: "현대자동차",
            currentPrice: 70842,
            fluctuations: -0.87,
        },
    ]);
});

export default router;
