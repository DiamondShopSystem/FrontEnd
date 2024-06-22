import React, { useContext } from 'react'
import { RiShoppingBag3Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import '../../styles/Ring.css'
import { CartContext } from '../../../helpers/CartContext';
import { Flip, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Ring = ({ ring }) => {

    const { id, title, image, price } = ring;
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart(ring, id);
        toast.success("Giỏ hàng đã có thêm sản phẩm mới.", {
            closeOnClick: true,
            autoClose: 2000,
            theme: "light",
            transition: Flip
        });
    };

    return (
        <div className='Ring-container-ring'>
            <div className='Ring-cover-image'>
                <Link to={`/user/product/ring/detail/${id}`}>
                    <button className='Ring-button-detail-ring'>Xem chi tiết</button>
                </Link>
                <Link to={`/product/${id}`} className='Ring-link-product'>
                    <img className='Ring-image-ring' src={image} alt={title} height='130px' width='130px' />
                </Link>
            </div>

            <div className='Ring-cover-content'>
                <h2 className='Ring-name-ring'>{title}</h2>
                <div className='Ring-cover-price-ring'>
                    <div className='Ring-price-ring'>
                        <span className='Ring-new-price-ring'>$ {price}</span>
                        <span className='Ring-old-price-ring'>$ old Price</span>
                    </div>
                    <div className='Ring-RiShoppingBag3Fill-ring'>
                        <RiShoppingBag3Fill onClick={handleAddToCart} title='Thêm vào giỏ hàng' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ring
