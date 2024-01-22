import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.ObjectId,
        ref:"User",
        required: true
    },
    profilePicture: {
        type: String,
        default: ""
    },
    subscribed: {
        type: Array,
        default: []
    },
    playlists: {
        type: Array,
        default: []
    }

}, {timestamps: true})

profileSchema.index({user_id: 1})

export default mongoose.model('Profile', profileSchema)