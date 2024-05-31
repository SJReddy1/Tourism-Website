import React from 'react'
import { Link } from 'react-router-dom';

function AttractionCard({info}) {
  return (
    <Link  style={{height:'200px', width:'80%'}} className="first-img item-hover clean attraction-gallery aos-init aos-animate" to={`${info._id}`} data-aos="fade-up" data-aos-duration="2000">
    <img src={info?.images[0]} alt="burj-khalifa" className="our-img"/>
    <div className="overlay">
        <span> </span>
        <span>{info.title}</span>
        <span></span>
    </div>
</Link>
  )
}

export default AttractionCard
