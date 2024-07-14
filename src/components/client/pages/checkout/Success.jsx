import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
    return (
        <>
            <div>Đặt hàng thành công</div>
            <Link to={"/"}>Tiếp tục mua hàng</Link>
        </>
    )
}

export default Success