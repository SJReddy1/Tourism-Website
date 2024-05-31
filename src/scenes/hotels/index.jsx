import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Pagination } from 'react-bootstrap';
import HotelCard from './HotelCard';
import { FaArrowLeft, FaArrowRight, FaEllipsisH } from 'react-icons/fa';
import { DatePicker, Space } from 'antd';
import moment from 'moment';

const ITEMS_PER_PAGE = 12;

const HotelBooking = () => {
  const { RangePicker } = DatePicker;
  const [currentPage, setCurrentPage] = useState(1);
  const [hotelData, setHotelData] = useState([]);

  async function getHotelData() {
    try {
      const result = await fetch('http://localhost:8000/hotels');
      const res = await result.json();
      console.log(res.data);
      setHotelData(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedHotels = hotelData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const totalPages = Math.ceil(hotelData.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    getHotelData();
  }, [])

  const [fromDate, setFromDate] = useState(null)
  const [toDate, setToDate] = useState(null)

  function filterByDate(dates, dateStrings) {
    console.log('From: ', dates[0],', to: ', dates[1]);
    setFromDate(dateStrings[0])
    setToDate(dateStrings[1])
  }

  return (
    <Container className='mb-5'>
    <div className='d-flex justify-content-center mt-4 mb-3 p-2'>

          <RangePicker format='DD-MM-YYYY' onChange={filterByDate} />
    </div>
      
      <Row>
        { paginatedHotels.length > 0 ? paginatedHotels.map((hotel) => (
          <Col sm={12} md={6} lg={4}>
            <HotelCard key={hotel._id} hotel={hotel} fromDate={fromDate} toDate={toDate} />
          </Col>
        )) : <h1 className='text-center'>No Hotels available at present moment</h1>}
      </Row>
      { paginatedHotels.length > 0 && <Row className="justify-content-center mt-4">
        <Col xs={12}>
          <Pagination className="justify-content-center">
            {/* Previous button */}
            <Pagination.Prev
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Go to previous page"
            >
              <FaArrowLeft />
              <span>Previous</span>
            </Pagination.Prev>

            {/* Page numbers */}
            {[...Array(totalPages)].map((_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}

            {/* Ellipsis to indicate more pages */}
            {totalPages > 5 && (
              <Pagination.Ellipsis>
                <FaEllipsisH />
              </Pagination.Ellipsis>
            )}

            {/* Next button */}
            <Pagination.Next
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Go to next page"
            >
              <span>Next</span>
              <FaArrowRight />
            </Pagination.Next>
          </Pagination>
        </Col>
      </Row>}
    </Container>
  );
};

export default HotelBooking;
