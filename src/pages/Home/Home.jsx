import React from "react";
import Hero from "../../components/Hero/Hero";
import searchIcon from "../../assets/images/search.svg";
import userIcon from "../../assets/images/user.svg";
import handIcon from "../../assets/images/hand.svg";
import handIcon2 from "../../assets/images/hand2.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="max-w-7xl mx-auto px-5 py-6 mb-[130px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="feature_box">
            <img src={searchIcon} alt="" />
            <h3 className="text-2xl font-semibold my-6">Find a Job</h3>
            <p className="text-lg text-gray-500 mb-8">
              Lorem ipsum dolor sit amet consectetur. Laborum assumenda sunt, amet quisquam maiores
              eligendi delectus.
            </p>
            <div className="flex justify-center">
              <Link to="/" className="feature_button">
                Apply Now
              </Link>
            </div>
          </div>
          <div className="feature_box">
            <img src={userIcon} alt="" />
            <h3 className="text-2xl font-semibold my-6">Staffing Solution</h3>
            <p className="text-lg text-gray-500 mb-8">
              Lorem ipsum dolor sit amet consectetur. Laborum assumenda sunt, amet quisquam maiores
              eligendi delectus.
            </p>
            <div className="flex justify-center">
              <Link to="/" className="feature_button">
                Find Top Talent
              </Link>
            </div>
          </div>
          <div className="feature_box">
            <img src={handIcon} alt="" />
            <h3 className="text-2xl font-semibold my-6">Join Our Team</h3>
            <p className="text-lg text-gray-500 mb-8">
              Lorem ipsum dolor sit amet consectetur. Laborum assumenda sunt, amet quisquam maiores
              eligendi delectus.
            </p>
            <div className="flex justify-center">
              <Link to="/" className="feature_button">
                Join Now
              </Link>
            </div>
          </div>
          <div className="feature_box">
            <img src={handIcon2} alt="" />
            <h3 className="text-2xl font-semibold my-6"> Managed Services</h3>
            <p className="text-lg text-gray-500 mb-8">
              Lorem ipsum dolor sit amet consectetur. Laborum assumenda sunt, amet quisquam maiores
              eligendi delectus.
            </p>
            <div className="flex justify-center">
              <Link to="/" className="feature_button">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
