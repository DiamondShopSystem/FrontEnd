import React from 'react'
import "../../styles/Client.css";
import { Link } from 'react-router-dom';
const Checkout = () => {
    return (
        <div className='checkout__wrap'>
            <div className='checkout__main'>
                <div className='main__header' style={{ paddingBottom: '1rem' }}>
                    <Link to={"/"} className='logo' >
                        <h1 className='logo__text'>TRÙM KIM CƯƠNG</h1>
                    </Link>

                    <div >

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout