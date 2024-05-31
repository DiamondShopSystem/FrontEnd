import { FaArrowLeft } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import "./UserLogin.css";
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
import { GetResultContext } from "./GetResultContext";


const UserLogin = () => {

    const [error, setError] = useState("");
    const [number, setNumber] = useState("");
    const navigate = useNavigate();
    // const [flag, setFlag] = useState(false);
    const [otp, setOtp] = useState("");
    const { setResult } = useContext(GetResultContext);

    function setUpRecaptha(number) {
        const recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
            size: 'invisible',
            callback: () => {
                console.log('recaptcha resolved..')
            }
        });
        recaptchaVerifier.render();
        return signInWithPhoneNumber(auth, number, recaptchaVerifier);
    }


    const getOtp = async (e) => {
        e.preventDefault();
        console.log(number);
        setError("");
        // if (number === "" || number === undefined || number.length < 12)
        //     return setError("Số điện thoại không hợp lệ");
        try {
            const response = await setUpRecaptha(number);
            console.log(response);
            setResult(response);
            console.log(otp);

            // window.location = "/user/verify/otp";
            navigate("/user/verify/otp");
            // setFlag(true);
        } catch (err) {
            return setError("Số điện thoại không hợp lệ");
        }
    };
    return (

        <div>
            <div className="min-h-100vh flex justify-center grow bg-slate-50 dark:bg-navy-900">
                <main className="flex w-full flex-col items-center bg-white dark:bg-navy-700 lg:max-w-md">
                    <div className="text-left flex w-full max-w-sm   flex-col justify-center cursor-pointer py-4">
                        <Link to="/" className="flex d-none">
                            <div className="">
                                <FaArrowLeft />
                                <span className="text-slate-600 font-bold ml-2">Trang chủ</span>
                            </div>
                        </Link>
                    </div>
                    <div className="flex w-full max-w-sm grow flex-col justify-center p-5">
                        <div className="text-center">
                            <div className="mt-4">
                                <h2 className="text-2xl font-semibold text-slate-600 dark:text-navy-100">Chào mừng trở lại</h2>
                                <p className="text-slate-400 dark:text-navy-300">Vui lòng đăng nhập để tiếp tục</p>

                            </div>
                        </div>

                        <Form onSubmit={getOtp}>
                            <Form.Group className="mt-4" >
                                {/* <PhoneInput
                                className=""
                                defaultCountry="VN"
                                value={number}
                                onChange={setNumber}
                                placeholder="Số điện thoại của bạn"
                            /> */}

                                {/* <div className="flex relative"> */}
                                <div>
                                    {/* <label className="relative flex"> */}
                                    {/* <input class="form-input peer w-full rounded-lg bg-slate-150 px-3 py-2 pl-9 ring-primary/50 placeholder:text-slate-400 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 dark:focus:bg-navy-900 ml-2" placeholder="Số điện thoại của bạn" type="text" name="phone" /> */}

                                    <PhoneInput
                                        // country="VN"
                                        value={number}
                                        onChange={setNumber}
                                        placeholder="Số điện thoại của bạn"
                                        defaultCountry="VN"
                                    // countries={["VN"]}
                                    />
                                    {/* <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                                        <FaPhone />
                                    </span> */}
                                    {/* </label> */}
                                </div>


                                {/* </div> */}
                                <div id="recaptcha-container"></div>
                            </Form.Group>
                            {<Alert className="text-red-600">{error}</Alert>}
                            <Button className="btn mt-2 mr-3 h-10 w-full bg-[#1bb51b] font-bold text-white hover:bg-[#71cd00]" type="submit" variant="primary">
                                SMS
                            </Button>
                        </Form>
                        <div className="my-[30px] flex flex-col justify-end">
                            <div>Lợi ích khi đăng nhập/đăng kí Trùm Kim Cương</div>
                            <ul className="mx-[10px]">
                                <li className="my-[5px] text-primary">
                                    <FaCheckCircle />
                                    <span className="mx-[5px] ">Dễ dàng tra cứu hạng thẻ thành viên</span>
                                </li>
                                <li className="my-[5px] text-primary">
                                    <FaCheckCircle />
                                    <span className="mx-[5px]">Xem lịch sử giao dịch và hóa đơn điện tử</span>
                                </li>
                                <li className="my-[5px] text-primary">
                                    <FaCheckCircle />
                                    <span className="mx-[5px]">Xem đuợc ưu đãi dành riêng cho quý khách</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
        </div>

    );
};

export default UserLogin;