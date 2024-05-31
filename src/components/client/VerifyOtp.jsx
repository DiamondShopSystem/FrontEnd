import { FaPencil } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import "./VerifyOtp.css";
import {  useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "react-phone-number-input/style.css";

import "./UserLogin"
import {useContext,  useState } from "react";

import { GetResultContext } from "./GetResultContext";




const VerifyOtp = () => {

    const [error, setError] = useState("");
    const [otp, setOtp] = useState("");

    const { result , phoneNumber } = useContext(GetResultContext);

    const navigate = useNavigate();

    const verifyOtp = async (e) => {
        console.log(otp);
        e.preventDefault();
        setError("");
        if (otp === "" || otp === null) return;
        try {
            await result.confirm(otp);
            
        } catch (err) {
            alert("Sai rồi mày ơi");
        }
    };

    return (
        <div className="wrapper1">
            <main className="total2">
               
                    <div className="text-center">
                        <div className="header">
                            <h2>Xác thực</h2>
                            <p className="text-slate-400 dark:text-navy-300">Mã xác thực của bạn đã được gửi tới số điện thoại</p>
                            <a href="/user/login" className="text-blue-400  focus:outline-none font-light py-2 px-4 rounded inline-flex items-center">
                                <span>{phoneNumber}</span>
                                <FaPencil />
                            </a>
                        </div>
                    </div>
                <div>
                    <Form onSubmit={verifyOtp} >
                        <Form.Group >
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
    )
}

export default VerifyOtp;