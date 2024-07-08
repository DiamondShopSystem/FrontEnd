import React from 'react';
import UserProfileSider from './UserProfileSider';
import { Outlet } from 'react-router-dom';
import '../../styles/UserProfile.css'

const UserProfile = () => {
    return (
        <div className="userprofile__container">
            <div className="row">
                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                    <h1 className='info-title'>Tài khoản của bạn</h1>
                </div>
            </div>
            <div className="row">
                <div className='col-12 col-md-3'>
                    <UserProfileSider />
                </div>
                <div className='col-12 col-md-9'>
                    <div className=" userprofile__content">
                        <Outlet />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UserProfile;
