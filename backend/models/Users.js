import mongoose from 'mongoose'
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    profileImg: {
        type: String,
        default: ''
    },
    password: String,
    role: {
        type: String,
        default: 'user'
    }
})


// Hash password before save
    userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
    });

export default mongoose.model('User', userSchema);