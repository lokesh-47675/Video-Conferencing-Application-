import { User  } from '../models/user.model.js';
import { Meeting } from "../models/meeting.model.js";

import bcrypt, { hash } from 'bcrypt'

import httpStatus from 'http-status'
import crypto from "crypto"


//Login Route
const login = async (req, res) => {

    let { username, password } = req.body;

    if(!username || !password) {
        return res.status(400).json({message :"Please Provide the data"});
    }

    console.log(username);
    try{

        const user = await User.findOne({username});
        if(!user){
            return res.status(httpStatus.NOT_FOUND).json({ message : "User Not Found"});
        }

        if(await bcrypt.compare(password,user.password)){
            let token = crypto.randomBytes(20).toString("hex");
            console.log(token);
            user.token = token;
            await user.save();
            return res.status(httpStatus.OK).json({
                 message: "User Log In Successfully",
                 token : token
            });
        }

        return res.status(401).json({message : "Password is Incorrect"});

    }catch(err){
        return res.status(500).json({message : `Something Went Wrong ${err}`});
    }


}

//Register Route
const register = async (req, res) => {
  try {
    let { name: name, username: username, password: password } = req.body

    let existingUser = await User.findOne({username});

    if (existingUser) {
      return res
        .status(httpStatus.CONFLICT)
        .json({message: 'User Already Exist!'})
    }

    let hashPassword = await bcrypt.hash(password, 10);

    let newUser = new User({
      name: name,
      username: username,
      password: hashPassword
    })


    await newUser.save();

    return res.status(httpStatus.CREATED).json({ message : "User Registered Successfully!" });

  }
  catch (error) {
    return res.status(404).json({message : `Something Went Wrong ${error}`});
  }
}

const getUserHistory = async (req, res) => {
    const { token } = req.query;

    try {
        const user = await User.findOne({ token: token });
        const meetings = await Meeting.find({ user_id: user.username })
        return res.json(meetings)
    } catch (e) {
        res.json({ message: `Something went wrong ${e}` })
    }
}

const addToHistory = async (req, res) => {
    const { token, meeting_code } = req.body;

    try {
        const user = await User.findOne({ token: token });

        const newMeeting = new Meeting({
            user_id: user.username,
            meetingCode: meeting_code
        })

        await newMeeting.save();

        res.status(httpStatus.CREATED).json({ message: "Added code to history" })
    } catch (e) {
        res.json({ message: `Something went wrong ${e}` })
    }
}

export { login ,register, getUserHistory, addToHistory};
