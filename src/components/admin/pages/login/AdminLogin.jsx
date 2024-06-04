import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../../../../firebase-config';
import '../../styles/Login.css';

function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();

    const handleSubmit = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setMessage('Đăng nhập thành công');
                navigate('/admin');
            })
            .catch((error) => {
                setMessage('Đăng nhập thất bại: ' + error.message);
            });
    };

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                setMessage('Đăng nhập với Google thành công');
                navigate('/admin/dashboard');
            })
            .catch((error) => {
                setMessage('Đăng nhập với Google thất bại: ' + error.message);
            });
    };

    return (
        <div className="login">
            <div className="login__form-container">
                <h2 className="login__title">Đăng Nhập</h2>
                <p className="login__subtitle">Trùm Kim Cương</p>
                <form onSubmit={handleSubmit} className="login__form">
                    <div className="login__input-group">
                        <label className="login__label">Tên Đăng Nhập:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                            className="login__input"
                        />
                    </div>
                    <div className="login__input-group">
                        <label className="login__label">Mật Khẩu:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                            className="login__input"
                        />
                    </div>
                    <div className="login__forgot-password">
                        <Link to="/admin/forgotpassword" className="login__forgot-password-button">Quên Mật Khẩu</Link>
                    </div>
                    <button type="submit" className="login__button">Đăng Nhập</button>
                </form>
                <button onClick={handleGoogleSignIn} className="login__google-button">
                    <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google Logo" /> Đăng nhập với Google
                </button>
                {message && <p className="login__message">{message}</p>}
            </div>
        </div>
    );
}

export default AdminLogin;
