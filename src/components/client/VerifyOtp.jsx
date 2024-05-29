import { FaArrowLeft } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaPencil } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import "./VerifyOtp.css";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    RecaptchaVerifier,
    signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "../../config/firebase";




const VerifyOtp = () => {

    const [error, setError] = useState("");
    const [number, setNumber] = useState("");
    const [flag, setFlag] = useState(false);
    const [otp, setOtp] = useState("");
    const [result, setResult] = useState("");
    const navigate = useNavigate();

    const verifyOtp = async (e) => {
        console.log(otp);
        e.preventDefault();
        setError("");
        if (otp === "" || otp === null) return;
        try {
            await result.confirm(otp);
            alert("Đăng nhập thành công");
            //   navigate("/home");
        } catch (err) {
            alert("Sai rồi mày ơi");
            //   setError(err.message);
        }
    };

    return (
        <div className="min-h-100vh flex justify-center grow bg-slate-50 dark:bg-navy-900">
            <main className="flex w-full flex-col items-center bg-white dark:bg-navy-700 lg:max-w-md">
                <div className="flex w-full max-w-sm grow flex-col justify-center p-5">
                    <div className="text-center">
                        <div className="mt-4">
                            <h2 className="text-2xl font-semibold text-slate-600 dark:text-navy-100">Xác thực</h2>
                            <p className="text-slate-400 dark:text-navy-300">Mã xác thực của bạn đã được gửi tới số điện thoại</p>
                            <a href="/user/login" className="text-blue-400  focus:outline-none font-light py-2 px-4 rounded inline-flex items-center">
                                <span>0365320161</span>
                                <FaPencil />
                            </a>
                        </div>
                    </div>
                    <Form onSubmit={verifyOtp} >
                        <Form.Group className="mb-3" >

                            <div className="flex relative">
                                <Form.Control
                                    className="form-input peer w-full rounded-lg bg-slate-150 px-3 py-2 pl-9 ring-primary/50 placeholder:text-slate-400 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 dark:focus:bg-navy-900 ml-2"
                                    type="otp"
                                    placeholder="OTP bạn vừa nhận được"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                />
                                <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                                    <FaEnvelope />
                                </span>
                            </div>
                        </Form.Group>
                        <Button className="btn mt-2 mr-3 h-10 w-full bg-blue-500 font-bold text-white" type="submit" variant="primary">
                            Xác nhận
                        </Button>
                    </Form>
                </div>
            </main>
        </div>
        // <Form onSubmit={verifyOtp}>
        //     <Form.Group className="mb-3">
        //         <Form.Control
        //             type="otp"
        //             placeholder="Enter OTP"
        //             onChange={(e) => setOtp(e.target.value)}
        //         />
        //     </Form.Group>
        //     <div className="button-right">
        //         <Link to="/">
        //             <Button variant="secondary">Cancel</Button>
        //         </Link>
        //         &nbsp;
        //         <Button type="submit" variant="primary">
        //             Verify
        //         </Button>
        //     </div>
        // </Form>

    )
}

export default VerifyOtp;