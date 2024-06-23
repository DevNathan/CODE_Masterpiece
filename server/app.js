import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connect from "./dbConnection/connection.js";

dotenv.config();

// DB 연결
connect();

const app = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({extended: false}));
app.use(
    cors({
        origin: "*",
        method: ["GET", "POST", "DELETE", "PUT"],
        credential: true,
    })
);

app.listen(PORT, () => {
    console.log(`server is now running on ${PORT}`);
});
