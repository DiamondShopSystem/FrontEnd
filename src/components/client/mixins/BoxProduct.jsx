import React from 'react'
import '../styles/BoxProduct.css';
import { Link } from 'react-router-dom';

const BoxProduct = ({ product }) => {

    const { _id, title, thumbnail, price } = product;

    return (
        <div className='boxproduct'>
            <Link to={`/${_id}`} style={{color: 'black'}} >
            <div className='boxproduct__cover'>
                
                    <img className='boxproduct__image' src={thumbnail} alt='Ảnh' height='auto' width='220px' />
                
            </div>
            <div className='boxproduct__cover'>
                    <h4 className='boxproduct__title'>{title}</h4>
                
                <div className='boxproduct__price'>
                    <div >
                        <span >{price} VND</span><br />
                    </div>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default BoxProduct;
