import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.ObjectId,
        ref:"User",
        required: true
    },
    bio: {
        type: String,
        minLength: 20
    },
    subscribed: {
        type: String,
    },
    playlists: {
        type: String
    }

}, {timestamps: true})

export default mongoose.model('Profile', profileSchema)