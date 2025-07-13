import User from '../models/Users.js'
import bcrypt from 'bcryptjs'
import generateToken from '../utils/generateToken.js'

export const register = async (req, res) => {
    const { name, email, password } = req.body
    const userExists = await User.findOne({email})
    if (userExists) return res.status(400).json({ message: 'Email exists'})

    const user = await User.create({ name, email, password })
    res.status(201).json({ token: generateToken(user._id)})    
}

export const login = async (req,res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email })
    if (!user || !(await bcrypt.compare(password, user.password)))
        return res.status(401).json({message: 'Invalid credentials'})

    res.status(200).json({ token: generateToken(user._id)})
}