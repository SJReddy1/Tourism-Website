import React from 'react'
import './vehicle.css'
import {Link} from 'react-router-dom'


function Vehicle({vehicle}) {

  return (
    <div>
      <div className='row bs'>
    <div className='col-md-4'>
        <img src={vehicle.img_url} alt={vehicle.img_url} className='smallimg'></img>
    </div>
      <div className='col-md-7 text-left'>
        <h1>{vehicle.name}</h1>
        <p>Capacity: {vehicle.capacity}</p>
        <p>Type: {vehicle.type}</p>
        <div style={{float: 'right'}}>
           <Link to= {`/vehicle/${vehicle._id}`} > <button className='btn btn-primary'>Book Now</button></Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Vehicle
