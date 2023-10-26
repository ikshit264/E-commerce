import {AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram, AiOutlineWhatsApp} from "react-icons/ai";
import "./Newsletter.scss";

const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <div className="small-text">NEWSLETTER</div>
        <div className="big-text">SIGN UP FOR LATEST UPDATES AND OFFERS</div>
        <div className="form">
          <input type="text" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
        <div className="small-text">Will be used with our Privacy Policy</div>
        <div className="icon-list">
          <span className="icons">
            <AiOutlineFacebook />
          </span>
          <span className="icons">
            <AiOutlineInstagram />
          </span>
          <span className="icons">
            <AiOutlineWhatsApp />
          </span>
          <span className="icons">
            <AiOutlineTwitter />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
