import React from 'react';
import './button.css';
import { Card, Button } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { Link, redirect } from 'react-router-dom';
import moment from 'moment';


function HotelCard({ hotel, fromDate, toDate }) {

  function isDateValidAndCurrent(dateString) {
    const format = 'DD-MM-YYYY';
    const chosenDate = moment(dateString, format, true);

    if (!chosenDate.isValid()) {
      return false;
    }

    const currentDate = moment().format(format);
    return chosenDate.isSameOrAfter(currentDate, 'day');
  }

  function isDateValidAndCurrent(dateString) {
    const format = 'DD-MM-YYYY';
    const chosenDate = moment(dateString, format, true);
    if (!chosenDate.isValid()) {
      return false;
    }
    const currentDate = moment();
    return chosenDate.isSameOrAfter(currentDate, 'day');
  }

  const redirectHandler = () => {
    if (!fromDate || !toDate) {
      alert('Please select date range')
      return;
    } else {
      if (!isDateValidAndCurrent(fromDate) || !isDateValidAndCurrent(toDate)) {
        alert('Please select valid date range')
        return;
      }
      window.open(`/hotel/${hotel._id}/${fromDate}/${toDate}`);
    }
  }

  
  return (
    <div className='m-4 shadow bg-body rounded'>
      <Card className="shadow-lg dark:shadow-gray-800 rounded-lg overflow-hidden">
        <Card.Img
          variant="top"
          src={hotel.photo1 || "/placeholder.svg"}
          alt="Hotel Image"
          style={{ height: '300px', objectFit: 'cover' }}
        />
        <Card.Body>
          <Card.Title className="font-bold text-xl mb-2">{hotel.hotel_name}</Card.Title>
          <Card.Subtitle className="text-gray-500 mb-2">
            {hotel.city}, {hotel.state}, {hotel.country}
          </Card.Subtitle>
          <Card.Text className="text-gray-500">{hotel.overview.slice(0,200) + "..."}</Card.Text>
          <div className="d-flex align-items-center mt-4">
            {/* Render star ratings based on average rating */}
            {Array.from({ length: Math.floor(hotel.star_rating) }, (_, index) => (
              <FaStar key={index} className="text-yellow-500 mr-1" />
            ))}
            {/* Display the rest with gray stars */}
            {Array.from({ length: 5 - Math.floor(hotel.rating_average) }, (_, index) => (
              <FaStar key={index} className="text-gray-400 mr-1" />
            ))}
            <span className="text-gray-500 text-sm ml-2">{hotel.star_rating.toFixed(1)}</span>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-4"
            onClick={(fromDate, toDate) => {
              if (fromDate === null || toDate === null) {
                alert('Please select date range')
              }
            }}>
            <Button className="custom-button" onClick={redirectHandler}>Show More</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
};

export default HotelCard;
