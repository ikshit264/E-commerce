import Banner from "./Banner/Banner";
import Products from "../Products/Products";
import Category from "./Category/Category";
import "./Home.scss";
const Home = () => {
    return <div className="Home">
        <Banner/>
        <div className="main-content">
            <div className="layout">
                <Category/>
                <Products/>
            </div>
        </div>
    </div>;
};

export default Home;
