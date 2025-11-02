import express from 'express'

import { sendReservation } from '../controller/reservation.js'

const route = express.Router()


route.post('/send',sendReservation)



export default route