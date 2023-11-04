import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/images/hero-right.png";
import heroLeftImg from "../../assets/images/hero-left.png";

const Hero = () => {
  return (
    <div className="lg:h-screen mb-[60px]">
      <div className="hero-left-container">
        <div className="hero-left-img">
          <img src={heroLeftImg} alt="" />
        </div>
        <div className="max-w-7xl mx-auto px-5 py-6">
          <div className="md:h-[650px] flex items-center">
            <div className="hero-left">
              <h1>
                Welcome to <br />
                <span>Brain Worth</span> the <br />
                future of recruitment
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat id incidunt error
                doloremque deleniti modi facere, eius aut facilis necessitatibus?
              </p>
              <div>
                <Link to="/" className="hero-button">
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-right-container">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
