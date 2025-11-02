import mongoose from 'mongoose'

import validator from 'validator'


const reservationSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[2,"First name must contain atleast 2 chracters"],
        maxLength:[15,"First name cannot more than contain 15 chracters"],
    },

     lastName:{
        type:String,
        required:true,
        minLength:[2,"Last name must contain atleast 2 chracters"],
        maxLength:[15,"Last name cannot more than contain 15 chracters"],
    },
    email:{
         type:String,
        required:true,
        validate:[validator.isEmail,"Provide a valid email  "]
    },
    phone:{
        type:Number,
        required:true,
        minLength:[10,"Number must contain atleast 10 digits"],
        maxLength:[10, "cannot more than contain 10 digits "],
    },
    time:{
        type:String,
        required:true
    },
     date:{
        type:String,
        required:true
    }
})


export const Reservation = mongoose.model('reservation',reservationSchema)

