import mongoose from "mongoose";

const comedianSchema = new mongoose.Schema({
    name: {
        type: String
    },
    pic:{
        type: String,
        default:""
    },
    bio:{
        type: String
    },
    specials:{
        type: Array,
        default: []
    },
    podcasts:{
        type: Array,
        default: []
    }, 
    showdates: {
        type: Array,
        default: []
    },
    genre: {
        type: Array,
        default: []
    }
})

comedianSchema.index({name: 1});
comedianSchema.index({specials: 1});
comedianSchema.index({podcasts: 1});
comedianSchema.index({showdates: 1});
comedianSchema.index({genre: 1});


export default mongoose.model('Comedian', comedianSchema)