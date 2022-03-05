import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
    /*id: { 
        type: Number,
        default: 0
    },*/
    fname: String,
    lname: String,
    job_title: String,
    email: String,
    selectedFile: String,
    created_at: {
        type: Date,
        default: new Date()
    },
});

const CardData = mongoose.model('CardData', cardSchema);

export default CardData;