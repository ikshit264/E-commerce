import "./Products.scss";
import SingleProduct from "../SingleProduct/SingleProduct"
import image1 from "../../assets/products/earbuds-prod-1.webp";
import image2 from "../../assets/products/earbuds-prod-2.webp";
import image3 from "../../assets/products/earbuds-prod-3.webp";
import image4 from "../../assets/products/earbuds-prod-4.webp";
import image5 from "../../assets/products/earbuds-prod-5.webp";
import image6 from "../../assets/products/headphone-prod-1.webp";
import image7 from "../../assets/products/headphone-prod-2.webp";
import image8 from "../../assets/products/headphone-prod-3.webp";
import image9 from "../../assets/products/headphone-prod-4.webp";
import image11 from "../../assets/products/headphone-prod-6.webp";
import image10 from "../../assets/products/headphone-prod-5.webp";
import image12 from "../../assets/products/speaker-prod-1.webp";
import image13 from "../../assets/products/speaker-prod-2.webp";
import image14 from "../../assets/products/speaker-prod-3.webp";
import image15 from "../../assets/products/speaker-prod-4.webp";
import image16 from "../../assets/products/speaker-prod-5.webp";
import image17 from "../../assets/products/watch-prod-1.webp";
import image18 from "../../assets/products/watch-prod-2.webp";
import image19 from "../../assets/products/watch-prod-3.webp";
import Product from "./Product/Product";
const Products = (props) => {
    
    return (<div>
        <div className="product-container">
            <div className="sec-heading">
            {props.title}
            </div>
                <div className="products">
                    <Product image={image1} />
                    <Product image={image2}/>
                    <Product image={image3}/>
                    <Product image={image4}/>
                    <Product image={image5}/>
                    <Product image={image6}/>
                    <Product image={image7}/>
                    <Product image={image8}/>
                    <Product image={image9}/>
                    <Product image={image10}/>
                    <Product image={image11}/>
                    <Product image={image12}/>
                    <Product image={image13}/>
                    <Product image={image14}/>
                    <Product image={image15}/>
                    <Product image={image16}/>
                    <Product image={image17}/>
                    <Product image={image18}/>
                    <Product image={image19}/>
                </div>
        </div>
    </div>);
};
Products.defaultProps = {
    title: 'Section Heading'
}
export default Products;
