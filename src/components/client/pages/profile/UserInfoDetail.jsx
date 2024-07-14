import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/UserInfoDetail.css'

const UserInfoDetail = () => {

    const [userInfo, setUserInfo] = useState("");
    useEffect(() => {
        axios.get("/user/info", {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        })
            .then(function (response) {
                setUserInfo(response.data.user);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    const updateUserInfo = async (e) => {
        e.preventDefault();
        axios.patch("/user/info", userInfo, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        })
            .then((result) => {
                const checkResult = result.data;
                if (checkResult.code === 200) {
                    toast.success('Cập nhật thành công');
                } else {
                    toast.error('Cập nhật không thành công');
                }
            })
            .catch((error) => { console.log(error); toast.error('Cập nhật không thành công') })
    }

    return (
        <>
            <ToastContainer />
            <div className="userinfodetail__container">
                <div className='userinfodetail__title'>
                    <h3>Thông tin tài khoản</h3>
                </div>
                <form onSubmit={updateUserInfo}>
                    <div className="userinfodetail__form-group">
                        <label>Họ Và Tên</label>
                        <input
                            type="text"
                            name="fullName"
                            value={userInfo.fullName}
                            onChange={(e) => setUserInfo({ ...userInfo, fullName: e.target.value })}
                        />
                    </div>

                    <div className="userinfodetail__form-group">
                        <label>Số Điện Thoại</label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            disabled={true}
                            value={userInfo.phoneNumber}
                            onChange={(e) => setUserInfo({ ...userInfo, phoneNumber: e.target.value })}
                        />
                    </div>
                    <div className="userinfodetail__form-group">
                        <label>Địa Chỉ</label>
                        <input
                            type="text"
                            name="address"
                            value={userInfo.address}
                            onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
                        />
                    </div>
                    <button className='userinfodetail__button' type="submit" >Lưu thay đổi</button>
                </form>
            </div>
        </>
    );
};

export default UserInfoDetail;
