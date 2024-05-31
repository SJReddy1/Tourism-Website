import React from 'react'

function AllBookings({ vehicleData, hotelData, cancelBooking }) {
    const user = JSON.parse(localStorage.getItem('current-user'))

    async function cancelBookingHandler(itemId, hotel, vehicle) {
        try {
            console.log(itemId);
            const response = await fetch(`http://localhost:8000/cancleBooking/${user.data._id}/${itemId}/${hotel}/${vehicle}`);
            const res = await response.json();

            console.log(res.success);

            if (res.success) {
                alert(`${hotel ? 'Hotel' : 'Vehicle'} Booking is successfully cancelled`)
            } else {
                alert('Failed to cancel');
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="row">
            <div className="col-md-6 col-sm-12">
                <h1>Vehicle Booked</h1>
                {vehicleData.length > 0 ? vehicleData.map((data) => {
                    return <>
                        <div className="col-12 mb-4">
                            <div className="row">

                                <div className="card h-100 col-4">

                                    <img className="card-img-top" src={data.vehicle.img_url} alt={`${data.vehicle.img_url} Image`} />

                                </div>
                                <div className="col-8">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h5 className="card-title">{data.vehicle.name}</h5>
                                            <div className="row">
                                                <div className="col-6">
                                                    <p className="card-text text-muted m-0">User Name: {data.user_name}</p>

                                                    <p className="card-text text-muted m-0">Transaction ID: {data.transaction_id}</p>
                                                    <p className="card-text text-muted m-0">Status: <span className={`bg-${data.status === 'booked' ? 'success' : 'danger'} text-white p-1`} style={{ borderRadius: '5px' }}>{data.status}</span></p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="card-text text-muted m-0">Booked for: {data.booking_date}</p>
                                                    <p className="card-text text-muted m-0">Rent: ${data.vehicle.rentperhr}/hr</p>
                                                    <p className="card-text text-muted m-0">Total Hours: {data.total_hours}</p>
                                                    <p className="card-text text-muted m-0">Total Amount: ${data.total_amount}</p>
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            (cancelBooking) && <div className="card-img-overlay d-flex justify-content-end">
                                                <button className="btn btn-danger btn-sm" style={{ height: '40px' }}
                                                    onClick={() => cancelBookingHandler(data._id, false, true)}>
                                                    Cancel
                                                    <span className="sr-only" >Delete</span>
                                                </button>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                }) : <h1 className='text-dark p-4'> No vehicle is booked</h1>}
            </div>
            <div className="col-md-6 col-sm-12">
                <h1>Hotel Booked</h1>
                {hotelData.length > 0 ? hotelData.map((data) => {
                    return <>
                        <div className="col-12 mb-4">
                            <div className="row">

                                <div className="card h-100 col-4">

                                    <img className="card-img-top" src={data.hotel.photo1} alt={`${data.hotel.photo1} Image`} />

                                </div>
                                <div className="col-8">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h5 className="card-title">{data.hotel.hotel_name}</h5>
                                            <div className="row">
                                                <div className="col-6">
                                                    <p className="card-text text-muted m-0">User Name: {data.user_name}</p>

                                                    <p className="card-text text-muted m-0">Transaction ID: {data.transaction_id}</p>
                                                    <p className="card-text text-muted m-0">Status: <span className={`bg-${data.status === 'booked' ? 'success' : 'danger'} text-white p-1`} style={{ borderRadius: '5px' }}>{data.status}</span></p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="card-text text-muted m-0">Booking Date:<br /> {data.fromD + ' - ' + data.toD}</p>
                                                    <p className="card-text text-muted m-0">Rent: ${data.hotel.rentperday}/day</p>
                                                    <p className="card-text text-muted m-0">Total Amount: ${data.total_amount}</p>
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            cancelBooking && <div className="card-img-overlay d-flex justify-content-end">
                                                <button className="btn btn-danger btn-sm" style={{ height: '40px' }}
                                                    onClick={() => cancelBookingHandler(data._id, true, false)}>
                                                    Cancel
                                                    <span className="sr-only" >Delete</span>
                                                </button>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                }) : <h1 className='text-dark  p-4'> No Hotel is booked</h1>}
            </div>
        </div>
    )
}

export default AllBookings
