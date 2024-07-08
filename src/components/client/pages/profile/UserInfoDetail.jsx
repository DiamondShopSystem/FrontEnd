import React, { useState } from 'react';
import '../../styles/UserInfoDetail.css'

const UserInfoDetail = () => {
    const [userInfo, setUserInfo] = useState({
        fullName: '',
        email: '',
        phone: '',
        birthDate: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    const handleSave = () => {
        console.log('User information saved:', userInfo);
    };

    return (
        <div className="userinfodetail__container">
            <div className='userinfodetail__title'>
                <h3>Thông tin tài khoản</h3>
            </div>

            <form>
                <div className="userinfodetail__form-group">
                    <label>Họ và tên</label>
                    <input
                        type="text"
                        name="fullName"
                        value={userInfo.fullName}
                        onChange={handleChange}
                    />
                </div>
                <div className="userinfodetail__form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={userInfo.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="userinfodetail__form-group">
                    <label>Số điện thoại</label>
                    <input
                        type="tel"
                        name="phone"
                        value={userInfo.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className="userinfodetail__form-group">
                    <label>Ngày sinh</label>
                    <input
                        type="date"
                        name="birthDate"
                        value={userInfo.birthDate}
                        onChange={handleChange}
                    />
                </div>
                <div className="userinfodetail__form-group">
                    <label>Địa chỉ</label>
                    <input
                        type="text"
                        name="address"
                        value={userInfo.address}
                        onChange={handleChange}
                    />
                </div>
                <button className='userinfodetail__button' type="button" onClick={handleSave}>Lưu thay đổi</button>
            </form>
        </div>
    );
};

export default UserInfoDetail;
