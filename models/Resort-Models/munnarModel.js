import mongoose from 'mongoose';
const { Schema } = mongoose;

const munnarSchema  = new Schema({
    place : {
        type : String,
        require : true
    },
    price : {
        type : String,
        require : true
    },
    days : {
        type : String,
        require : true
    },
    highlights : {
        type : String,
        require : true
    },
    description : {
        type : String,
        require : true
    },
    image : {
        data:Buffer,
        contentType : String
    }
});

export default mongoose.model("munnarModel" ,munnarSchema )