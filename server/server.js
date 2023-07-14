import express from "express";
import cors from "cors";

import apiStockRoutes from "./routes/api-stock.js";
import apiUserRoutes from "./routes/api-user.js";

const app = express();
const PORT = 8080;

app.use(cors());

app.use("/api/stock", apiStockRoutes);
app.use("/api/user", apiUserRoutes);

app.listen(PORT, () => {
    console.log(`Test Server Listening on PORT ${PORT}`);
});
