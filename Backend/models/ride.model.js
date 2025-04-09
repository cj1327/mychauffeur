// ride.model.js
const mongoose = require('mongoose');
const rideSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },

    captain:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Captain'
    },

    pickup:{
        type:String,
        required:true
    },

    destination:{
        type:String,
        required:true
    },

    fare:{
        type:Number,
        required:true
    },

    status:{
        type:String,
        enum:['pending', 'accepted', 'ongoing', 'completed', 'cancelled'],
        default:'pending'
    },
    
    distance:{
        type:Number
    },

    duration:{
        type:Number
    },

    paymentID:{
        type:String
    },
    
    orderID:{
        type:String
    },

    signature:{
        type:String
    },

    otp: {
        type: String,
        select: false, // Exclude from JSON responses
        required: true
    }


})

module.exports = mongoose.model('ride', rideSchema)