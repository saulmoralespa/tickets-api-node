import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import ticketsRouters from "./routes/ticketsRouters.js"

dotenv.config();
connectDb();

const app = express();
app.use(express.json());

app.use("/api/tickets", ticketsRouters);


const port = process.env.PORT || 3000;
const hostPort = process.env.NODE_PORT || 8888;

app.listen(port, () => {
    console.log(`http://localhost:${hostPort}/api/tickets`);
});