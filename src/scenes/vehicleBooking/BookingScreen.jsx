import React, { useEffect } from 'react'
import './vehicle.css'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import moment from 'moment'
import { DatePicker, Space } from 'antd';
// import emailjs from 'emailjs'

function BookingScreen() {
    
    const vehicleId = useParams().transportId;
    const [vehicle, setVehicle] = useState({});
    const [bookingDate, setBookingDate] = useState('');

    
    const [selectedhours, setSelectedhours] = useState(1);
    const total_amount = (vehicle?.rentperhr * selectedhours);
    const selectHandler=(e)=>{
        setSelectedhours(e.target.value);
    }
    
    async function getVehicle() {
        try{
            const response = await fetch(`http://localhost:8000/vehicle/${vehicleId}`);
            const res = await response.json();
            if(res.success){

                setVehicle(res.data);
            }
        }catch(err){
            console.log(err)
        }
    }

    // function sendMail({ bookingData }) {

    //     (function () {
    //       emailjs.init("CHATVUtbqB7CyZijK")
    //     })();
    
    //     const user = JSON.parse(localStorage.getItem('current-user'));
    //     var params = {
    //       sendername: "BTP Tourism",
    //       to: user.data.email,
    //       subject: "Sending Booking Invoice",
    //       replyto: "btp.tourism@gmail.com",
    //       message: bookingData
    //     }
    
    //     var service_id = "service_8uvfi1d";
    //     var template_id = "template_z7y3cjo";
    
    //     emailjs.send(service_id, template_id, params).then(
    //       res => {
    //         alter('Email sent successfully')
    //       }).catch(err => {
    //         alert('Email sending failed')
    //       })
    //   }
    
    const bookVehicle = async () => {

        if(!localStorage.getItem('current-user')){
            alert('Please login to book vehicle');
            return;
        }
        const user = JSON.parse(localStorage.getItem('current-user'));
        const bookingData = {
            vehicle: vehicle,
            vehicle_id: vehicleId,
            user_id: user.data._id,
            user_name: user.data.name,
            booking_date: bookingDate,
            total_hours: selectedhours,
            rentperhr: vehicle?.rentperhr,
            total_amount: total_amount
        }

        const confirm = window.confirm('Do you want to book this vehicle?');
        if(!confirm){
            return;
        }

        try{
           const response = await fetch('http://localhost:8000/booking/vehicle', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        });
           const res = await response.json();
              if(res.success){
                alert('Vehicle booked successfully');
                // sendMail({bookingData});
                window.location.href = '/vehicles';
              }
              if(res.error){
                alert('Vehicle booking failed');
              }
              
        }catch(err){
            console.log(err)
        }
    }

    function isDateValidAndCurrent(dateString) {
        const format = 'YYYY-MM-DD';
        const chosenDate = moment(dateString, format, true);
    
        if (!chosenDate.isValid()) {
          return false;
        }
    
        const currentDate = moment().format(format);
        return chosenDate.isSameOrAfter(currentDate, 'day');
      }

    const onChange = (date, dateString) => {
        const temp = moment(dateString).format('YYYY-MM-DD')
        if (!isDateValidAndCurrent(temp)) {
            alert('Please select valid date');
            return;
        }
        setBookingDate(temp);
    }
    
    useEffect(() => {
        getVehicle()
    }, []);
    return (
        <div className='m-5'>

            <div className='row justify-content-center mt-5 bs'>
                <div className='col-md-12 col-lg-6'>
                    <h1>{vehicle?.name}</h1>
                    <img src={vehicle?.img_url} alt={vehicle.img_url} className='bigimg' />
                </div>
                <div className='col-md-5'>
                    <div style={{ textAlign: 'left' }}>
                        <h1>Booking Details</h1>
                        <hr />
                        <p>Vehicle Name: {vehicle?.name}</p>
                        <p>Vehicle Type: {vehicle?.type}</p>
                    </div>

                    <div style={{ textAlign: 'left' }}>
                        <h1>Amount</h1>
                        <p>Booking for: <DatePicker onChange={onChange} /></p>
                        <p>Total hours: 
                        <select name='selectedhours' onChange={selectHandler}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                        </select> </p>
                        <p>Rent per hour: ${vehicle?.rentperhr} </p>
                        <p>Total amount: ${total_amount}</p>
                    </div>
                    <div style={{ float: 'right' }}><button className='btn btn-primary' onClick={bookVehicle}>Book Now</button> </div>
                </div>

            </div>
        </div>
    )
}

export default BookingScreen
