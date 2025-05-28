import mongoose from 'mongoose'
import User from "../models/User.js"

export const getUsers = async(req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({success: true, data: users});
    } catch (error) {
        console.error('Error in fetching users: ', error.message);
        res.status(500).json({success: false, message: 'Server Error'})
    }
};

export const postUser = async(req, res) => {
    const user = req.body;
    const newUser = new User(user);
    
    try {
        await newUser.save();
        res.status(201).json({success: true, data: newUser});
    } catch (error){
        console.error("Error in creating user event: ", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }

};

export const putUser = async(req, res) => {
    const { id } = req.params;
    const user = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        console.error("Invalid UserID")
        res.status(404).json({success: false, message: 'Invalid UserID'});
    }
    
    try {
        const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });
        res.status(200).json({success: true, data: updatedUser});
    } catch (error) {
        console.error('Error in updating user event: ', error.message);
        res.status(500).json({success: false, message: 'Server Error' });
    }
};

export const deleteUser = async(req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        console.error("Invalid UserID")
        res.status(404).json({success: false, message: 'Invalid UserID'});
    }

    try {
        await User.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "User Deleted"});
    } catch (error) {
        console.error('Error in deleting user event: ', error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
};