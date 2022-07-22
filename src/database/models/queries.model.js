const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuerySchema = new Schema({
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
    },
    askedBy:{
        type: Schema.Types.ObjectId,
        ref: "Student",
        required: true
    },
    timestamp: {
        type: Date,
        required: true,
        default: Date.now,
    }
})

const QueryModel = mongoose.model("Querie",QuerySchema);

module.exports= QueryModel;