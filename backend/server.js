import express from "express";
import pool from "./db.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());


// ...routes




app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
