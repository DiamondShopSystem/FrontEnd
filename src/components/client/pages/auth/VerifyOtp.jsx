import { FaPencil } from "react-icons/fa6";
import "../../styles/VerifyOtp.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import { useState, useContext, useEffect } from "react";
import 'react-phone-number-input/style.css'
import { GetResultContext } from "../../../../context/GetResultProvider";
import useAuth from "../../../../hooks/useAuth";
import axios from "axios";


const VerifyOtp = () => {
    const { setAuth, persist, setPersist } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const { result, phoneNumber } = useContext(GetResultContext);
    const [error, setError] = useState("");
    const [otp, setOtp] = useState("");

    useEffect(() => {
        localStorage.setItem("persist", persist);
    }, [persist]);
    
    //Submit xác nhận OTP
    const verifyOtp = async (e) => {
        e.preventDefault();
        setPersist(true);
        setError("");
        if (otp === "" || otp === null) return setError("OTP không chính xác");;
        try {
            await result.confirm(otp);
            const response = await axios.post("/login/verify/otp",
                JSON.stringify({ phoneNumber }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data))
            const accessToken = response?.data?.accessToken;
            const user = response?.data?.record;
            setAuth({ phoneNumber, accessToken, user });
            navigate(from, { replace: true });
        } catch (err) {
            return setError("OTP không chính xác")
        }
    };

    return (
        <div className="verify_otp_container">
            <div className="verify_otp_wrapper">
                <div className=" flex justify-center grow bg-slate-50 dark:bg-navy-900">
                    <main className="main flex w-full flex-col items-center bg-white dark:bg-navy-700 lg:max-w-md">
                        <img className="verify-otp_logo " src="https://upload.wikimedia.org/wikipedia/commons/6/68/Logo_FPT_Education.png" alt="Logo" />
                        <div className="flex w-full max-w-sm grow flex-col justify-center p-5">
                            <div className="verify_otp_header">
                                <div className="text-center">
                                    <div className="mt-4">
                                        <h2 className="text-2xl font-semibold text-slate-600 dark:text-navy-100">Xác thực</h2>
                                        <p className="text-slate-400 dark:text-navy-300">Mã xác thực của bạn đã được gửi tới số điện thoại</p>
                                        <Link href="/login" className="text-blue-400  focus:outline-none font-light py-2 px-4 rounded inline-flex items-center"  >
                                            <span>{phoneNumber}</span>
                                            <FaPencil className="mg-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="verify-otp">
                                <Form onSubmit={verifyOtp} >
                                    <Form.Group className="mb-3" >
                                        <div className="flex relative">
                                            <Form.Control
                                                className=" form-input peer w-full rounded-lg bg-slate-150 px-3 py-2 pl-9 ring-primary/50 placeholder:text-slate-400 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
                                                type="otp"
                                                placeholder="OTP bạn vừa nhận được"
                                                value={otp}
                                                onChange={(e) => setOtp(e.target.value)}
                                            />
                                        </div>
                                    </Form.Group>
                                    {error !== "" ? <div className="text-red-600 center">{error}</div> : <div className="text-red-600 d-none center">{error}</div>}
                                    <Button className="btn mt-2 mr-3 h-10 w-full bg-blue-500 font-bold text-white" type="submit" variant="primary">
                                        Xác nhận
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default VerifyOtp;