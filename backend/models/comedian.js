import mongoose from "mongoose";

const comedianSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    pic:{
        type: String,
        default:"",
    },
    bio:{
        type: String,
        required: true
    },
    specials:{
        type: Array,
        default: [],
        required: true
    },
    podcasts:{
        type: Array,
        default: [],
        required: true
    }, 
    showdates: {
        type: Array,
        default: [],
        required: true
    },
    genre: {
        type: Array,
        default: [],
        required: true
    }
})

comedianSchema.index({name: 1});
comedianSchema.index({specials: 1});
comedianSchema.index({podcasts: 1});
comedianSchema.index({showdates: 1});
comedianSchema.index({genre: 1});


export default mongoose.model('Comedian', comedianSchema)