const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
    },

    email: {
        type: String,
        required: [true, "Please provide your email"],
        unique: true,
        lowercase: true,
    },

    password: {
        type: String, 
        required: ["Please provide a password"],
    },

    passwordConfirm: {
        type: String, 
        required: ["Please confirm your password"],
        validate: {
            validator: function(el){
                return el === this.password;
            },
            message: "Passwords are not the same!",
        },
    },

    address: String,
    private_key: String,
    mnemonic: String,

});

userSchema.pre("save", async function (next){
    // Only run this function if password was modified
    if (!this.isModified("password")) return next();

    // Hass the password with cost of 12
    this.password = await bcrypt.hash(this.password,12);

    //Delete passwordConfirm field
    this.passwordConfirm = undefined;
    next()

});

userSchema.pre("save", function (next){
    if (!this.isModified("password") || this.isNew) return next();

    this.passwordChangedAt = Date.now() - 1000;
    next();
});

userSchema.pre(/^find/, function (next) {
    // this points to the current query
    this.find({ active: {$ne: false}});
    next();
});

userSchema.methods.correctPassword = async function (
    candidatePassword,
    userPassword
) {
    return await bcrypt.compare(candidatePassword,userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp){
    if (this.passwordChangedAt){
        const changedTimestamp = parseInt(
            this.passwordChangedAt.getTime() / 1000,
            10
        );

        return JWTTimestamp < changedTimestamp;
    }

    // False indicates no password change

    return false
};

const User = mongoose.model("User", userSchema);

module.exports = User;
