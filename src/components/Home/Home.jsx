import Banner from "./Banner/Banner";
import Products from "../Products/Products";
import Category from "./Category/Category";
import "./Home.scss";
import ScrollToTop from "react-scroll-to-top";
const Home = () => {
    return <div className="Home">
        <Banner/>
        <div className="main-content">
            <div className="layout">
                <Category/>
                <Products/>
                <ScrollToTop smooth/>
            </div>
        </div>
    </div>;
};

export default Home;
