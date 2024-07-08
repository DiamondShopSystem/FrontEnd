import React from 'react'
import '../styles/BoxProduct.css';
import { Link } from 'react-router-dom';

const BoxProduct = ({ product }) => {

    const { _id, title, thumbnail, price } = product;

    return (
        <div className='boxproduct'>
            <div className='boxproduct__cover'>
                <Link to={`/${_id}`} >
                    <img className='boxproduct__image' src={thumbnail} alt='Ảnh' height='auto' width='220px' />
                </Link>
            </div>
            <div className='boxproduct__cover'>
                <Link to={`/${_id}`} style={{ color: 'black' }}>
                    <h4 className='boxproduct__title'>{title}</h4>
                </Link>
                <div className='boxproduct__price'>
                    <div >
                        <span >{price} VND</span><br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxProduct;
