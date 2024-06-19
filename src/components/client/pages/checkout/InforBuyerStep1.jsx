import React from 'react'
import '../../styles/InforBuyerStep1.css'

const InforBuyerStep1 = () => {
    return (
        <div>
            <div className='InforBuyerStep1-radio-select-gender'>
                <div className='InforBuyerStep1-radio-gender'>
                    <input type='radio' name='gender' value='men' defaultChecked />Anh
                </div>

                <div className='InforBuyerStep1-radio-gender'>
                    <input type='radio' name='gender' value='woman' />Chị
                </div>
            </div>

            <div className='InforBuyerStep1-input-infor-cover'>
                <input className='InforBuyerStep1-input-infor' type='text' name='txtName' placeholder='Nhập tên' />
                <input className='InforBuyerStep1-input-infor' type='text' name='txtPhone' placeholder='Nhập số điện thoại' />
            </div>

            <div className='InforBuyerStep1-input-infor-cover'>
                <input className='InforBuyerStep1-input-infor' type='text' name='txtGmail' placeholder='Nhập gmail' />
                <input className='InforBuyerStep1-input-infor' type='text' name='txtBirth' placeholder='Nhập ngày sinh' />
            </div>
        </div>
    );
}

export default InforBuyerStep1
