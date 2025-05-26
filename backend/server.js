import express from 'express';
import { connectDB } from "./config/db.js"
import User from "./models/User.js"

const app = express();
const port = 3000;
app.use(express.json());

app.post('/api/users', async(req, res) => {
    const user = req.body;
    const newUser = new User(user);
    try {
        await newUser.save();
        res.status(201).json({success: true, data: newUser});
    } catch (error){
        console.error("Error in creating user event: ", error.message);
        res.status(500).json({success: false, message: "Server Error"})
    }

})

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    connectDB();
    console.log(`Server started at http://localhost:${port}`);
});