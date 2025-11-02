import ErrorHandler from '../error/error.js'

import { Reservation } from '../models/reservationSchema.js'


export const sendReservation = async (req,res,next)=>{
    const {firstName,lastName,email,phone,time,date} = req.body;

    if(!firstName || !lastName || !email || !phone || !time || !date){
        return next(new ErrorHandler("Please the fill the required fields",400))
    }

    try {
        await Reservation.create({firstName,lastName,email,phone,time,date});

        res.status(200).json({
            success:true,
            message:"Reservation Successfully"
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            message:error
        })
    }
}