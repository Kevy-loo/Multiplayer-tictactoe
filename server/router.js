const express = require('express');
const StreamChat = require('stream-chat').StreamChat
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

require('dotenv').config();

const router = express.Router();

const serverClient = StreamChat.getInstance(process.env.REACT_APP_API_KEY, process.env.REACT_APP_API_SECRET);

router.post('/signup', async(req, res) => {
    try{
        const {firstName, lastName, username, password} = req.body;
        const userId = uuidv4();
        const hashedPassword = await bcrypt.hash(password, 10);
        const token = serverClient.createToken(userId);
        res.json({token, userId, firstName, lastName, username, hashedPassword})
    } catch (error) {
        res.json(error)
    }
    
})

router.post('/login')



module.exports = router
