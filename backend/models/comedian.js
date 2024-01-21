import mongoose from "mongoose";

const comedianSchema = new mongoose.Schema({
    name: {
        type: String
    },
    pic:{
        type: String
    },
    bio:{
        type: String
    },
    specials:{
        type: String
    },
    podcasts:{
        type: String
    }, 
    showdates: {
        type: Date
    },
    genre: {
        type: String
    }
})

export default mongoose.model('Comedian', comedianSchema)