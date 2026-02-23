import mysql from "mysql2/promise";

const pool = mysql.createPool({
    host: process.env.DB_HOST||"localhost",
    user: process.env.DB_USER||"root",
    password: process.env.DB_PASSWORD||"",
    database: process.env.DB_NAME||"",
    waitForConnections: true,
    connectionLimit: 10,
    port:3306
});
pool.getConnection()
    .then(conn => {
        console.log("DB connected");
        conn.release();
    })
    .catch(err => {
        console.error("DB connection error:", err);
    });
export default pool;