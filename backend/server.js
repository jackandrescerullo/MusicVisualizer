import express from 'express';
import { connectDB } from "./config/db.js"
import userRoutes from "./routes/userRoute.js"

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server started at http://localhost:${PORT}`);
});