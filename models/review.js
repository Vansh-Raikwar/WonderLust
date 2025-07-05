const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const reviewSchema = new Schema({
    message: String,
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    createdat: {
        type: Date,
        default: Date.now()
    },
    author:{
        type:Schema.Types.ObjectId,
        ref: 'User',
    }
});

const Review = model("Review", reviewSchema);
module.exports = Review;