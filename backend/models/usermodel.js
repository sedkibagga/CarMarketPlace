const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter the username"]
    },
    email: {
        type: String,
        required: [true, "Please enter the email"]
    },
    password: {
        type: String,
        required: [true, "Please enter the password"]
    },
    // src: {
    //     type: String,
    //     required: [true, "Please enter the src"]
    // }
}, {
    timestamps: true
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
