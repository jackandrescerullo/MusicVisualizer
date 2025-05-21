import express from 'express';
import { connectDB } from "./config/db.js"

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    connectDB();
    console.log(`Server started at http://localhost:${port}`);
});