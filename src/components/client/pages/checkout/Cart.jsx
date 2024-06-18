import React, { useContext } from 'react'
import { CartContext } from '../../../helpers/CartContext';
import '../../styles/Cart.css'
import CartItem from './CartItem';
import { FiTrash2 } from 'react-icons/fi'

const Cart = () => {
    const { cart, clearCart } = useContext(CartContext);

    const total = cart.reduce((sum, item) => sum + item.price * item.amount, 0);

    return (
        <>
            {cart.map((item) => <CartItem cart={item} key={item.id} />)}

            {cart.length > 0 && (
                <div className="Cart-fiTrash2-cover">
                    <div onClick={clearCart} className="Cart-fiTrash2"><FiTrash2 size={'20px'} title='Xóa toàn bộ sản phẩm' /></div>
                </div>
            )}

            <div className="Cart-last-part-cart-container">
                <div className="Cart-last-part-cart-body">

                    <div className="Cart-total-cover">
                        <span className="Cart-total">Total</span>$ {total.toFixed(2)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
