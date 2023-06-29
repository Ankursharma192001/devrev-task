const mongoose = require('mongoose');
const userSchema = mongoose.Schema({

    firstname: {

        required: [true, 'first name is require'],
        type: String,
    },
    email: {
        required: [true, 'first name is require'],
        type: String
    },
    password: {

        required: [true, 'first name is require'],
        type: String
    },
    telephone: {
        
        type: Number,
        required: [true, 'Phone number is required'],
        
    }
},
    {
        
        timestamps: true,
    }
)


const Register = mongoose.model('Register', userSchema);
module.exports = Register;