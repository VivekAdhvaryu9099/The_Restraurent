import React, { useState } from 'react'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Reservation = () => {

    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail] = useState("");
    const [date,setDate] = useState("");
    const [time,setTime] = useState("");
    const[phone,setPhone] = useState(0);

    const navigate = useNavigate();

    const handleReservation = async (e)=>{
        e.preventDefault();

        try {
            const {data} = await axios.post('http://localhost:4000/api/reservation/send',
                {firstName,lastName,email,phone,date,time},
                {
                    headers:{
                        "Content-Type":"application/json"
                    },
                    withCredentials:true
                }
            );
            toast.success(data.message);
            setFirstName('');
            setLastName('');
            setEmail('');
            setPhone(0);
            setTime('');
            setDate('');

            toast.success("Reservation Done Successfully ")

            navigate('/success')

        } catch (error) {
                toast.error(error);            
        }

    }

  return (
    <section className='reservation' id='reservation'>

            <div className="container">
                    <div className="banner">
                        <img src="/reservation.png" alt="Reservation" />
                    </div>

                    <div className="banner">
                        <div className="reservation_form_box">
                            <h1>Make a Reservation</h1>
                            <p>For Further Question,Please Call</p>

                            <form>
                                <div>
                                    <input type="text"
                                     placeholder='FirstName'
                                      value={firstName} 
                                      onChange={(e)=>setFirstName(e.target.value)}
                                      />

                                       <input type="text"
                                     placeholder='LastName'
                                      value={lastName} 
                                      onChange={(e)=>setLastName(e.target.value)}
                                      /> 
                                </div>

                                <div>
                                    <input type="date" placeholder='Date' value={date} onChange={(e)=>setDate(e.target.value)} />

                                    <input type="time" placeholder='Time' value={time} onChange={(e)=>setTime(e.target.value)} />
                                </div>

                                <div>
                                    <input type="email" placeholder='Email' className='email_tag' value={email} onChange={(e)=>setEmail(e.target.value)}  />

                                    <input type="number" placeholder='Number' value={phone} onChange={(e)=>setPhone(e.target.value)}  />

                                </div>

                                  <button type='submit' onClick={handleReservation}>Reserve Now
                                         <span>
                                            <HiOutlineArrowNarrowRight/>
                                        </span>
                                        </button>

                            </form>

                        </div>
                    </div>
            </div>

    </section>
  )
}

export default Reservation
