import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Newsletter from "./Newsletter/Newsletter";
import Credits from "./Credits/Credits";
import "./Footer.scss";
const Footer = () => {
  return (
    <div>
      <Newsletter />
      <div className="footer">
        <div className="about">
          <h3>About</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ea,
            numquam voluptatum placeat obcaecati alias!
          </p>
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <div className="contact-content">
            <div className="location cc">
              <FaLocationArrow className="icons" />
              <p> SD-02, Old Bilt Colony, Ballarpur, Maharashtra, 442-901</p>
            </div>
            <div className="phone cc">
              <FaMobileAlt className="icons" />
              <p href="/"> +917865377788</p>
            </div>
            <div className="email cc">
              <FaEnvelope className="icons" />
              <p href="/"> ikshit.talera@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="display">
          <div className="categories">
            <h3>Categories</h3>
            <div className="categori-list">
              <a href="/">○ Headphones</a>
              <a href="/">○ Smart Watches</a>
              <a href="/">○ Bluetooth Speaker</a>
              <a href="/">○ Wireless Earbuds</a>
              <a href="/">○ Home theatre</a>
              <a href="/">○ projects</a>
            </div>
          </div>
          <div className="page">
            <h3>Pages</h3>
            <a href="/">○ Home</a>
            <a href="/">○ About</a>
            <a href="/">○ Privacy Policy</a>
            <a href="/">○ Returns</a>
            <a href="/">○ Terms & Condations</a>
            <a href="/">○ Contact Us</a>
          </div>
        </div>
      </div>
      <Credits />
    </div>
  );
};

export default Footer;
