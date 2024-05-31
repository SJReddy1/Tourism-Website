import React, { useEffect } from "react";
// import { button } from "/components/ui/button";
import { useState } from "react";
import { Select, Space } from 'antd';
import Form from './HotelForm'
import { Link } from "react-router-dom";
import AllBookings from "./AllBookings";
import Database from "./Database";


export default function Component() {

    const user = JSON.parse(localStorage.getItem("current-user"));
    if (!user) {
        alert("Please login first");
        window.open('/login');
        return
    }
    const admin = user.data.role === 'admin';

    const [showBooking, setShowBooking] = useState(false);

    const [vehicleData, setVehicleData] = useState([]);
    const [hotelData, setHotelData] = useState([]);

    const getBookingData = async () => {

        try {

            const response = await fetch(`http://localhost:8000/getBookings/vehicles`);
            const res = await response.json();
            if (res.success === false) {
                alert("Error in fetching vehicle booking data");
            }
            setVehicleData(res.data);
            console.log("vehicle array", res.data);

            const response1 = await fetch(`http://localhost:8000/getBookings/hotels`);
            const res1 = await response1.json();
            if (res1.success === false) {
                alert("Error in fetching  hotel booking data");
                return;
            }
            setHotelData(res1.data);
            console.log("hotel arr", res1.data)
            setShowBooking(true);

        } catch (error) {
            console.log(error);
        }
    }

    const getMyBookings = async () => {
        try {
            const response = await fetch(`http://localhost:8000/getBookings/${user.data._id}`);
            const res = await response.json();
            if (res.success === false) {
                alert("Error in fetching vehicle booking data");
                return;
            }
            setVehicleData(res.data.vehicle_booking);
            setHotelData(res.data.hotel_booking);
            console.log("user bookings", res);
        } catch (error) {
            console.log(error);
        }
    }

    const [dataArr, setDataArr] = useState([])
    const [currentPage, setCurrentPage] = useState("hotel");

    const getData = async (e) => {
        try {
            if (!e) e = { target: { value: "hotels" } }

            const response = await fetch(`http://localhost:8000/${e.target.value}`);
            const res = await response.json();

            if (res.success === false) {
                alert("Error in fetching data");
                return;
            }
            setDataArr(res.data);
            setCurrentPage(e.target.value);
            setShowBooking(false);
            console.log(res.data);

        } catch (error) {
            console.log(error);
        }
    }

    const deleteData = async (id) => {

        console.log(id, currentPage);

        try {
            const response = await fetch(`http://localhost:8000/${currentPage}/delete/${id}`, {
                method: 'DELETE'
            }
            )
            const res = await response.json();
            if (res.success === false) {
                alert("Error in deleting data");
                return
            }
            if (res.success === true) {
                alert("Data Deleted Successfully");
                getData();
            }
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        if (admin) {
            getData();
        } else {
            getMyBookings();
        }
    }, []);

    const [formValues, setFormValues] = useState("hotel")
    const handleChange = (value) => {
        console.log(value)
        setFormValues(value);
    };
    return (<div>
        {admin ?
            <div className="container">

                {/* Selections Menu */}
                <div className="d-flex justify-content-between mb-4">
                    <div className="d-flex align-items-center">
                        <button className="btn btn-light text-secondary mr-2" onClick={(e) => getData(e)} value={"hotels"}>Hotels</button>
                        <button className="btn btn-light text-secondary mr-2" onClick={(e) => getData(e)} value="vehicles">Vehicles</button>
                        <button className="btn btn-light text-secondary mr-2" onClick={(e) => getData(e)} value="attractions">Attractions</button>
                        <button className="btn btn-light text-secondary" onClick={getBookingData} value="bookings">Bookings</button>
                    </div>

                    {/* Add item */}
                    <div className="d-flex align-items-center">
                        <Select
                            defaultValue="hotel"
                            style={{ width: 120 }}
                            onChange={handleChange}
                            options={[
                                { value: 'hotel', label: 'Hotel' },
                                { value: 'vehicle', label: 'Vehicle' },
                                { value: 'attraction', label: 'Attraction' },
                            ]}
                        />
                        <Link to={`/admin/dashboard/add/${formValues}`}>
                            <button className="btn btn-outline-primary">
                                <PlusIcon className="mr-2" />
                                <span>Add New</span>
                            </button>
                        </Link>
                    </div>
                </div>

                {!showBooking ?

                    <Database dataArr={dataArr} deleteData={deleteData} currentPage={currentPage} />

                    :
                    <AllBookings vehicleData={vehicleData} hotelData={hotelData} />
                }
            </div>
            :
            <div className="container">
                <h1 className="text-center m-4 p-2"> My Bookings</h1>
                <AllBookings vehicleData={vehicleData} hotelData={hotelData} cancelBooking={true} />
            </div>
        }
    </div>

    );
}

function PlusIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    );
}
