import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"; // Import icons
import slider1 from "../images/slider-1.png";
import slider2 from "../images/slider-2.png";
import slider3 from "../images/slider-3.png";
import slider4 from "../images/slider-4.png";
import "./Carousel.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Custom Next Arrow component
  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FaAngleRight />
      </div>
    );
  };

  // Custom Previous Arrow component
  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FaAngleLeft />
      </div>
    );
  };
  return (
    <div className="carousel-wrapper owl-carousel">
      <Slider {...settings}>
        <div>
          <img className="carousel-image" src={slider1} alt="Image 1" />
        </div>
        <div>
          <img className="carousel-image" src={slider2} alt="Image 2" />
        </div>
        <div>
          <img className="carousel-image" src={slider3} alt="Image 3" />
        </div>
        <div>
          <img className="carousel-image" src={slider4} alt="Image 4" />
        </div>
        {/* Add more slides if needed */}
      </Slider>
    </div>
  );
};

const NewCorousel = () => {
	return (
		<>
			<div class="owl-item active" style={{width: "1132.8px;"}}><div class="owl-item home_slider_item">
          {/* <!-- Image by https://unsplash.com/@anikindimitry --> */}
          <div class="home_slider_background" style={{backgroundImage: "url(images/slider-1.png)"}}></div>

          <div class="home_slider_content">
            <div class="home_slider_content_inner" data-animation-in="flipInX" data-animation-out="animate-out fadeOut">
              <h1>Your Dubai Partner</h1>
              <div class="button home_slider_button">
                <div class="button_bcg"></div><a href="https://api.whatsapp.com/send?phone=9130777631&amp;text=I%20am%20looking%20for?">enquire now<span></span><span></span><span></span></a>
              </div>
            </div>
          </div>
        </div></div>
		</>
	)
}

export default NewCorousel;
