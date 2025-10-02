const User = require("../models/user.model.js");
const Message = require("../models/user.model.js");

const getUserForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
        res.status(200).json(filteredUsers)
    } catch (error) {
        console.error("Error in getUsersForSidebar: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

const getMessage = async (req, res) => {
    try {
        const { id: userToChatId } = req.params
        const senderId = req.user._id;

        const messages = await Message.find({
            $or: [
                { senderId: senderId, receiverId: userToChatId },
                { senderId: userToChatId, receiverId: senderId }
            ]

        })
        res.status(200).json(messages);
    } catch (error) {
        console.log("Error in getMessages controller: ", error.message);
        res.status(500).json({ error: "internal server error" });
    }
}

const sendMessage = async (req, res) => {
    try {
        const {text, image} = req.body;
        const { id:receiverId } = req.body;
        const senderId = req.ser._id;

        let imageUrl;
        if (image) {
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl = uploadResponse.secure_url;
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            text, 
            image: imageUrl,
        });

        await newMessage.save();

        // realtime functionality =>socket.io

        res.satatus(201).json(newMeassage);

    } catch (error) {
        console.log("Error in sendMessage controller: ", error.message);
        res.status(500).json({error: "Internal server error"});

    }

}

module.exports = { getUserForSidebar, getMessage, sendMessage };