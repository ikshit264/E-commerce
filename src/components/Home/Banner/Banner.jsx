import Banneraimg from "../../../assets/banner-img.png"
import "./Banner.scss";
const Banner = () => {
    return <div className="hero-banner">
        <div className="banner-content">
            <div className="text-content">
                <h1 className="content-child">SALES</h1>
                <p className="content-child">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut commodi est enim architecto animi nulla reiciendis odio aspernatur repellat quisquam?</p>
                <div className="ctas ">
                    <div className="banner-cta-1">READ MORE</div>
                    <div className="banner-cta-2">SHOP NOW</div>
                </div>
            </div>
                <img src={Banneraimg} alt="" className="banner-img"/>
        </div>
    </div>;
};

export default Banner;
