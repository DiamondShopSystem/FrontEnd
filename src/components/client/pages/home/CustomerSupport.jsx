import React from 'react'
import '../../styles/CustomerSupport.css'

const CustomerSupport = () => {
    return (
        <section className='CustomerSupport-container'>
            <div className='CustomerSupport-cover'>
                <h3 className='CustomerSupport-content-support'>Nhận tư vấn từ Trùm kim cương</h3>
                <p className='CustomerSupport-content-support'>Đăng ký ngay bên dưới để nhận hỗ trợ từ chúng tôi!</p>
                <input className='CustomerSupport-input' type="text" name='txtName' placeholder='Họ và Tên' />
                <input className='CustomerSupport-input' type="text" name='txtName' placeholder='Số điện thoại' />
                <select className='CustomerSupport-select'>
                    <option>Tỉnh/TP-</option>
                    <option>TP Hồ Chí Minh</option>
                    <option>Hà Nội</option>
                    <option>TP Đà Lạt</option>
                </select>
                <div className='CustomerSupport-button'>
                    <button type='submit'>TƯ VẤN NGAY</button>
                </div>
            </div>
        </section>
    )
}

export default CustomerSupport
