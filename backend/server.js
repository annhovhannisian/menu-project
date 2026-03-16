import express from "express";
import pool from "./db.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());


// ...routes

app.get("/categories", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM categories");
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.get("/categories/:id/menu", async (req, res) => {
    try {
        let {id}=req.params
        const [rows] = await pool.query("SELECT * FROM products where cat_id=?",[id]);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.post("/product/:id", async (req, res) => {
    try {
        let {id}=req.params
        let {cat_id}=req.body
        const [rows] = await pool.query(
            "UPDATE products SET cat_id = ? WHERE id = ?", [cat_id, id]);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
