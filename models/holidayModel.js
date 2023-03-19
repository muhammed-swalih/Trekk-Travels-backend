import mongoose from 'mongoose';
const { Schema } = mongoose;

const HolidaySchema  = new Schema({
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
    highlight1 : {
        type : String,
        require : true
    },
    highlight2 : {
        type : String,
        require : true
    },
    highlight3 : {
        type : String,
        require : true
    },
    highlight4 : {
        type : String,
        require : true
    },
    highlight5 : {
        type : String,
        require : true
    },
    highlight6 : {
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

export default mongoose.model("holidayModel" ,HolidaySchema )