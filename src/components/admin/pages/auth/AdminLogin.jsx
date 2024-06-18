import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../../../../config/firebase';
import axios from 'axios';
import '../../styles/AdminLogin.css';

function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();

    const handleSubmit = (event) => {
        event.preventDefault();
        const configuration = {
            method: "post",
            url: "admin/login",
            data: {
                email,
                password,
            },
        };
        axios(configuration)
            .then((result) => {
                console.log(result);
                const checkResult = result.data;
                console.log(checkResult);
                if (checkResult.code === 200) {
                    navigate('/admin/dashboard');
                } else {
                    setMessage(result.data.msg)
                }
            })
            .catch((error) => { console.log(error); })
        // signInWithEmailAndPassword(auth, email, password)
        //     .then((userCredential) => {
        //         setMessage('Đăng nhập thành công');
        //         navigate('/admin/dashboard');
        //     })
        //     .catch((error) => {
        //         setMessage('Đăng nhập thất bại: ' + error.message);
        //     });
    };

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                setMessage('Đăng nhập với Google thành công');
                navigate('/admin');
            })
            .catch((error) => {
                setMessage('Đăng nhập với Google thất bại: ' + error.message);
            });
    };

    return (
        <div className="adminlogin">
            <div className="adminlogin__form-container">
                <h2 className="adminlogin__title">Đăng Nhập</h2>
                <p className="adminlogin__subtitle">Trùm Kim Cương</p>
                <form onSubmit={handleSubmit} className="adminlogin__form">
                    <div className="adminlogin__input-group">
                        <label className="adminlogin__label">Tên Đăng Nhập:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                            className="adminlogin__input"
                        />
                    </div>
                    <div className="adminlogin__input-group">
                        <label className="adminlogin__label">Mật Khẩu:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                            className="adminlogin__input"
                        />
                    </div>
                    {message && <p style={{color:'red'}}  className="adminlogin__message">{message}</p>}
                    <div className="adminlogin__forgot-password">
                        <Link to="/admin/forgotpassword" className="adminlogin__forgot-password-button">Quên Mật Khẩu</Link>
                    </div>
                    <button type="submit" className="adminlogin__button">Đăng Nhập</button>
                    
                </form>
                <button onClick={handleGoogleSignIn} className="adminlogin__google-button">
                    <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google logo" /> Đăng nhập với Google
                </button>
                
            </div>
        </div>
    );
}

export default AdminLogin;