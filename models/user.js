// models/user.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: { type: String, required: true },
    username: { type: String, required: true },
    rentals: [
        {
            listing: {
                type: Schema.Types.ObjectId,
                ref: 'Listing'
            },
            rentDate: Date
        }
    ]
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
