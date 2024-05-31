import React, { useEffect, useState } from 'react'
import './style.css';
import ScrollAnimation from "../../components/ScrollAnimation";

import { FaCalendarAlt } from "react-icons/fa";
import { FaBusAlt } from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi";
import { FcCancel } from "react-icons/fc";
import { LuPrinter } from "react-icons/lu";
import { AiFillThunderbolt } from "react-icons/ai";
import { IoLanguage } from "react-icons/io5";
import { param } from 'jquery';
import { useParams } from 'react-router-dom';

function AttractionDetail() {

    const icon = [
        {
            icon: <FaCalendarAlt color="orange" size={'2rem'}/>,
            title: "Availability: Daily"
        },
        {
            icon: <GiSandsOfTime color="orange"size={'2rem'} />,
            alt: "Duration:5 - 6 Hours (Approx)",
            title: "Duration:5 - 6 Hours (Approx)",
        },
        {
            icon: <GiSandsOfTime color="orange" size={'2rem'}/>,
            alt: "Starting Time : 14:30:00",
            title: "Starting Time : 14:30:00",
        },
        {
            icon: <FaBusAlt color="orange" size={'2rem'}/>,
            alt: "Pick up & Drop Back",
            title: "Pick up & Drop Back"
        },
        {
            icon: <FcCancel color="orange" size={'2rem'} />,
            alt: "Free Cancellation 24 hours Prior",
            title: "Free Cancellation 24 hours Prior",
        },
        {
            icon: <LuPrinter color="orange" size={'2rem'}/>,
            alt: "Printed Voucher Accepted",
            title: "Printed Voucher Acceptedily",
        },
        { icon: <IoLanguage color="orange" size={'2rem'}/>, alt: "English / Arabic", title: "English / Arabic" },
        { icon: <AiFillThunderbolt color="orange" size={'2rem'}/>, alt: "Instant Confirmation", title: "Instant Confirmation" },
    ];

    const List = ({ list }) => {
        return (
            <li className="mb-2">
                <span style={{ color: "#EE7746", fontWeight: "bolder" }} className="">
                    {">> "}
                </span>{" "}
                {list}
            </li>
        );
    };

    const id = useParams().id;

    const [bigImg, setBigImg] = useState(null);

    const [info, setInfo] = useState({});

    const onChangeImage = (index) => {
        setBigImg(info?.images[index]);
    }


    const getData = async () => {
        try {
            const response = await fetch(`http://localhost:8000/attraction/${id}`);
            const data = await response.json();
            setInfo(data.data);
            setBigImg(data.data.images[0]);
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getData();
    }, [])
    return (
        <div className='mb-5'>
            <div className='big-h'>
                <h1>{info?.title?.toUpperCase()}</h1>
            </div>


            <div className="w-75 m-auto ">
                <div className="row mb-5 main mt-5">
                    <div className="col-md-6 col-sm-12">
                        <div style={{ width: "80%" }} className="m-auto mt-5 mb-5">
                            <div className="m-auto big-img">
                                <img
                                    className="w-100 h-100"
                                    src={bigImg}
                                    alt="image"
                                ></img>

                            </div>
                            <div className="d-flex small-img mt-2">
                                {info?.images && info?.images[0] && <img className="m-2 bg-danger" onClick={() => onChangeImage(0)} src={info?.images[0]} alt="image1" />}
                                {info?.images && info?.images[1] && <img className="m-2 bg-danger" onClick={() => onChangeImage(1)} src={info?.images[1]} alt="image2" />}
                                {info?.images && info?.images[2] && <img className="m-2 bg-danger" onClick={() => onChangeImage(2)} src={info?.images[2]} alt="image3" />}
                                {info?.images && info?.images[3] && <img className="m-2 bg-danger" onClick={() => onChangeImage(3)} src={info?.images[3]} alt="image4" />}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div style={{ width: "80%" }} className="m-auto sm:text-center">
                            <h2 style={{ color: "#EE7746" }} className="font-weight-bold">
                                {info?.title && info?.title.toUpperCase()}
                            </h2>
                            {info?.description && info?.description[0] && <p>{info?.description[0]}</p>}
                            {info?.description && info?.description[1] && <p>{info?.description[1]}</p>}
                            {info?.description && info?.description[2] && <p>{info?.description[2]}</p>}
                        </div>
                    </div>
                </div>

                <ScrollAnimation>
                    <div className="row">
                        <div className="col text-center">
                            <h2
                                className="section_title commn-heading aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <span className="yellow-shape">{info?.title?.toUpperCase()}</span>
                            </h2>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation>
                    <div className="boxs d-flex flex-wrap mb-5 justify-content-center ">
                        {icon.map((x, index) => (
                            <div
                                key={index}
                                style={{ width: "230px", height: "150px" }}
                                className="box hoverStyle shadow px-3 m-3 align-content-center align-self-center text-center option-box"
                            >
                                {x.icon}
                                <p>{x.title}</p>
                            </div>
                        ))}
                    </div>
                </ScrollAnimation>
                <ScrollAnimation>
                   { info?.inclusions > 0 && <div className="row mb-5">
                        <div className="col text-center">
                            <h2
                                className="section_title commn-heading aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <span className="yellow-shape">INCLUSIONS</span>
                            </h2>
                        </div>
                    </div>}
                </ScrollAnimation>
                <ScrollAnimation>
                    <div className="row  text-black">
                        <div className="col-md-6">

                            <ul>
                                {info?.inclusions > 0 && info?.inclusions.map((x, index) => {
                                    return (index < info?.inclusions.length/2 ) && <List key={index} list={x} />
                                })}
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                {info?.inclusions > 0 && info?.inclusions.map((x, index) => {
                                    return (index >= info?.inclusions.length/2) && <List key={index} list={x} />
                                })}
                            </ul>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation>
                    <div className="row mb-5">
                        <div className="col text-center">
                            <h2
                                className="section_title commn-heading aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <span className="yellow-shape">WHY SHOULD I GO FOR THIS?</span>
                            </h2>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation>
                    <div className="row text-black">
                        <div className="col-md-6">
                            <ul>
                                {info?.reason && info?.reason.map((x, index) => {
                                    return (index < info?.reason.length/2) && <List key={index} list={x} />
                                })}
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                {info?.reason && info?.reason.map((x, index) => {
                                    return (index >= info?.reason.length/2) && <List key={index} list={x} />
                                })}
                            </ul>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation>
                    <div className="row mb-5">
                        <div className="col text-center">
                            <h2
                                className="section_title commn-heading aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <span className="yellow-shape">THE DUBAI TOURS ADVANTAGE</span>
                            </h2>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation>
                    <div className="row text-black">
                        <div className="col-md-6">
                            <ul>
                                {info?.advantage && info?.advantage.map((x, index) => {
                                    return (index < info?.advantage.length/2) && <List key={index} list={x} />
                                })}
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                {info?.advantage && info?.advantage.map((x, index) => {
                                    return (index >= info?.advantage.length/2) && <List key={index} list={x} />
                                })}
                            </ul>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation>
                    <div className="row mb-5">
                        <div className="col text-center">
                            <h2
                                className="section_title commn-heading aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <span className="yellow-shape">IMPORTANT INFORMATION</span>
                            </h2>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation>
                    <div className="row text-black">
                        <div className="col-md-6">
                            <ul>
                                {info?.information && info?.information.map((x, index) => {
                                    return (index < info?.information.length/2) && <List key={index} list={x} />
                                })}
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                {info?.information && info?.information.map((x, index) => {
                                    return (index >= info?.information.length/2) && <List key={index} list={x} />
                                })}
                            </ul>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation>
                    <div className="row mb-5">
                        <div className="col text-center">
                            <h2
                                className="section_title commn-heading aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <span className="yellow-shape">BOOKING POLICY</span>
                            </h2>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation>
                    <div className="row text-black">
                        <div className="col-md-6">
                            <ul>
                                {info?.booking_policy && info?.booking_policy.map((x, index) => {
                                    return <List key={index} list={x} />
                                })}
                            </ul>

                        </div>
                        <div className="col-md-6">
                            { info?.images && <img src={info?.images[0]} style={{ height: '25rem' }} alt="image" />}
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    )
}

export default AttractionDetail