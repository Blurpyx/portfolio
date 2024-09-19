import express from "express";
import cors from "cors";
import exp from "constants";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(3000, () => console.log("Server started on port 3000"));