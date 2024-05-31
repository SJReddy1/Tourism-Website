import React from "react";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import Copyright from "../../components/Copyright";
import "../../App_copy.css";
import OurServices from "../../components/services/OurServices";

const HomePage = () => {
  return (
    <>
      <div className="super-container" style={{width:"100%",overflow:"hidden"}}>
        {/* <Header /> */}
        <div>
          <Carousel/>
					<OurServices />
          {/* <Footer/> */}
          {/* <Copyright/> */}
        </div>
      </div>
    </>
  );
};

export default HomePage;
