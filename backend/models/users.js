import mongoose  from "mongoose";
import bcrypt from 'bcrypt;'

const SALT_ROUNDS = 8;

const usersSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        minLength: 8,
        maxLenth: 20
    },
    username:{
        type: String,
        minLength: 4,
        maxLenth: 20
    }

}, {timestamps: true});

usersSchema.index({email: 1});
usersSchema.index({username: 1});

usersSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next();
})


export default mongoose.model('User', usersSchema);