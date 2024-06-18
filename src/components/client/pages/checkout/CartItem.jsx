import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { IoMdClose, IoMdAdd, IoMdRemove } from 'react-icons/io';
import '../../styles/CartItem.css';
import { CartContext } from '../../../helpers/CartContext';

const CartItem = ({ cart }) => {

    const { id, title, amount, image, price } = cart;
    const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);

    return (
        <div className='CartItem-cover'>
            <div className='CartItem-cover-image'>
                <Link to={`/product/${id}`}>
                    <img src={image} width="60px" height="60px" alt=''/>
                </Link>
                <div className='CartItem-cover-title'>
                    <div className='CartItem-body-title'>
                        <Link to={`/product/${id}`} className='CartItem-title-cart'>{title}</Link>
                        <div onClick={() => removeFromCart(id)} className='CartItem-IoMdClose'><IoMdClose title='Xóa' size='20'/></div>
                    </div>

                    <div className='CartItem-cover-amountAndPrice'>
                        <div className='CartItem-amount'>
                            <div onClick={() => decreaseAmount(id)} className='CartItem-IoMdRemove'><IoMdRemove size='15px' /></div>
                            <div className='CartItem-quantity'>{amount}</div>
                            <div onClick={() => increaseAmount(id)} className='CartItem-IoMdAdd'><IoMdAdd size='15px'/></div>
                        </div>
                        <div className='CartItem-price'>$ {price}</div>
                        <div className='CartItem-total-price'>$ {price * amount}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
