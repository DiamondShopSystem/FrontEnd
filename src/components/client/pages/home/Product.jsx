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
                    <img className='image-product' src={'https://cdn.pnj.io/images/thumbnails/300/300/detailed/210/SP-vong-tay-vang-y-18k-dinh-da-ecz-pnj-xm00c000102-1.png'} alt='' height='auto' width='220px' />
                </Link>
            </div>

            <div className='cover-content'>
                <Link to={`/product/${id}`} className='link-product' style={{color: 'black'}}>
                    <h4 className='name-product'>{name}</h4>
                </Link>
                <div className='cover-price-product'>
                    <div className='price-product'>
                        <span className='new-price-product'>$ {price}</span><br />
                        <span className='old-price-product'>$ 2000</span>
                    </div>
                </div>
                <div className='RiShoppingBag3Fill-product'>
                    <RiShoppingBag3Fill />
                </div>
            </div>


        </div>
    )
}

export default Product
