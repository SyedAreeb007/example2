import React from 'react'
import './ProductDisplay.css'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
import NewsLetter from '../NewsLetter/NewsLetter'
import { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    return (
        <>
            <div className='productdisplay'>
                <div className="productdisplay-left">
                    <div className="productdisplay-img-list">
                        <img src={product.image} />
                        <img src={product.image} />
                        <img src={product.image} />
                    </div>
                    <div className="productdisplay-img">
                        <img className='productdisplay-main-img' src={product.image} />
                    </div>
                </div>
                <div className="productdisplay-right">
                    <h1>{product.name}</h1>
                    <div className="productdisplay-right-star">
                        <img src={star_icon} />
                        <img src={star_icon} />
                        <img src={star_icon} />
                        <img src={star_icon} />
                        <img src={star_dull_icon} />
                        <p>(122)</p>
                    </div>
                    <div className="productdisplay-right-prices">
                        <div className="productdisplay-right-oldprice">
                            Rs. {product.old_price}
                        </div>
                        <div className="productdisplay-right-newprice">
                            Rs. {product.new_price}
                        </div>
                    </div>
                    <div className="productdisplay-right-size">
                        <h1>Select Size</h1>
                        <div className="productdisplay-right-sizes">
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                        </div>
                    </div>
                    <button onClick={()=>{addToCart(product.id)}}>Add To Cart</button>
                </div>

            </div>
            <div className="news-letter">
                <NewsLetter />
            </div>
        </>
    )
}

export default ProductDisplay
