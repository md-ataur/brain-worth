import React from "react";
import Hero from "../../components/Hero/Hero";
import searchIcon from "../../assets/images/search.svg";
import userIcon from "../../assets/images/user.svg";
import handIcon from "../../assets/images/hand.svg";
import handIcon2 from "../../assets/images/hand2.svg";
import quoteIcon from "../../assets/images/quote.svg";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import linkedIn from "../../assets/images/linkedin.svg";
import twitter from "../../assets/images/twitter.svg";
import youtube from "../../assets/images/youtube.svg";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="max-w-7xl mx-auto px-5 py-6 lg:mb-[130px] mb-[80px]">
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
      <div className="max-w-7xl relative mx-auto px-5 py-6 mb-[60px]">
        <div className="quoteIcon">
          <img src={quoteIcon} alt="" />
        </div>
        <div className="quote_area lg:flex justify-around items-center">
          <h2 className="text-4xl font-semibold mb-12 lg:mb-0">
            Arrange a free <br />
            introductory call with us
          </h2>
          <div className="quote-button">
            <Link to="/">Call</Link>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="max-w-7xl mx-auto px-5 py-6">
          <div className="bottom_top_content max-w-[600px]">
            <img className="max-w-[170px]" src={logo} alt="logo" />
            <h4 className="text-3xl font-medium my-4">is a German and UK based recruitment firm</h4>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nesciunt corporis autem
              numquam dolor debitis quisquam quam aperiam aliquam iste odit soluta quas quibusdam
              sit id, earum ducimus doloremque. Nesciunt corrupti nobis officiis delectus quam iure!
              Iusto ad placeat iure eos neque culpa inventore, assumenda consectetur modi ipsam quos
              obcaecati.
            </p>
          </div>
        </div>
        <div className="bg-shape"></div>
      </div>
      <div className="relative">
        <div className="footer-section">
          <div className="max-w-7xl mx-auto px-5 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="footer-content">
                <h3>Quick Links</h3>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/">About us</Link>
                  </li>
                  <li>
                    <Link to="/">Services</Link>
                  </li>
                  <li>
                    <Link to="/">Blog</Link>
                  </li>
                  <li>
                    <Link to="/">Contact</Link>
                  </li>
                  <li>
                    <Link to="/">Dashboard</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-content">
                <h3>Legal & Compliance</h3>
                <ul>
                  <li>
                    <Link to="/">Impressum</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/">Terms & Condition</Link>
                  </li>
                  <li>
                    <Link to="/">Copyright Patent</Link>
                  </li>
                  <li>
                    <Link to="/">Faq</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-content">
                <h3>Contact Us</h3>
                <div className="address">
                  <label>HEADQUATER OFFICE</label>
                  <label>0176-83025310</label>
                  <label>info@brainwoerth.com</label>
                  <label>Mainzer LandstraBe 70, 60339 Frankfurt/Main</label> <br />
                  <label>REPRESENTATION OFFICE</label>
                  <label>124 City Road, London, C1F 2NX</label>
                </div>
              </div>
              <div>
                <img className="max-w-[170px]" src={logo} alt="logo" />
                <p className="text-gray-400 mt-4 mb-6">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus ad recusandae
                  veritatis dolorem illum earum, nostrum aut voluptatum soluta ipsum
                </p>
                <div className="flex gap-5">
                  <Link to="/">
                    <img width="40px" src={instagram} alt="" />
                  </Link>
                  <Link to="/">
                    <img width="40px" src={facebook} alt="" />
                  </Link>
                  <Link to="/">
                    <img width="40px" src={linkedIn} alt="" />
                  </Link>
                  <Link to="/">
                    <img width="40px" src={twitter} alt="" />
                  </Link>
                  <Link to="/">
                    <img width="40px" src={youtube} alt="" />
                  </Link>
                </div>
              </div>
            </div>
            <p className="copyright-bar">Copyright @ BRAINWORTH. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
