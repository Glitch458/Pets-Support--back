const { Schema, model } = require('mongoose');
const { handleSaveErrors } = require('../helpers');

const userSchema = new Schema({
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    token: {
        type: String,
        default: null,
    },
}, { versionKey: false, timestamps: true });

userSchema.post('save', handleSaveErrors);

const User = model('user', userSchema);

module.exports = User;


