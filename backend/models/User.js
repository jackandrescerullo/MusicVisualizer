import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    timestamp: {type: Date, default: Date.now},
    page: String,
    referrer: String,
    userAgent: String,
    eventType: String
})

const User = mongoose.model('User', userSchema)
export default User;