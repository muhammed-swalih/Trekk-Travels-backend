import mongoose from 'mongoose';
const { Schema } = mongoose;

const DestinationSchema  = new Schema({
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
    }
});

export default mongoose.model("Destination" ,DestinationSchema )