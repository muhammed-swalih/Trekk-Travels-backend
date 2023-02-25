import mongoose from 'mongoose';
const { Schema } = mongoose;

const adSchema  = new Schema({
    image : {
        data:Buffer,
        contentType : String
    }
});

export default mongoose.model("adsModel" ,adSchema )