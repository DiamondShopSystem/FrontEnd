import React from 'react'
import '../../styles/Product.css'
import { RiShoppingBag3Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom';

const Product = ({ product }) => {

    const { id, name, image, price } = product;

    console.log(id);

    return (
        <div className='cover-product'>
            <div className='cover-image'>
                <Link to={`/product/${id}`} className='link-product'>
                    <img className='image-product' src={image} alt='' height='150px' width='150px' />
                </Link>
            </div>

            <div className='cover-content'>
                <h4 className='name-product'>{name}</h4>
                <div className='cover-price-product'>
                    <div className='price-product'>
                        <span className='new-price-product'>$ {price}</span>
                        <span className='old-price-product'>$ old Price</span>
                    </div>
                    <div className='RiShoppingBag3Fill-product'>
                        <RiShoppingBag3Fill />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Product
