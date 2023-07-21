import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assests/3.jpg";
import img2 from "../assests/4.jpg";
// import img3 from "../assests/5.jpg";
// import img4 from "../assests/6.jpg";
// import img5 from "../assests/7.jpg";



import { NavLink } from "react-router-dom";
import userImage from "../assests/user-image.jpg";

const Service = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={1000}
      >
        <div>
          <img src={img1} alt="Item1" />
          <p className="legend">Full Stack</p>
        </div>
        {/* <div>
          <img src={img33} alt="Item1" />
          <p className="legend">Full Stack</p>
        </div>
        <div>
          <img src={img4} alt="Item1" />
          <p className="legend">Full Stack</p>
        </div>
        <div>
          <img src={img5} alt="Item1" />
          <p className="legend">Full Stack</p>
        </div> */}
        <div>
          <img src={img2} alt="Item3" />
          <p className="legend">Peer-to-peer Support</p>
        </div>
      </Carousel>
      <NavLink to="/aboutme">
        <div className="floating-icon">
          <img src={userImage} alt="User" className="user-image" />
        </div>
      </NavLink>
    </div>
  );
};

export default Service;
