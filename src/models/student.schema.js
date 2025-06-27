const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String
        required: true,
        unique: true,
        trim: true
    },
    age: {
        type: Number
        required: true
        trim: true
    }
}, {
    timestamps: true,
    versionKey: false
});

const Student = mongoose.model(Student, studentSchema)