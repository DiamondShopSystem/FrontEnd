import { FaArrowLeft } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import "./UserLogin.css";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useContext, useState } from "react";
import {
    RecaptchaVerifier,
    signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "../../config/firebase";
import { GetResultContext } from "./GetResultContext";


const UserLogin = () => {

    const [error, setError] = useState("");
    const [number, setNumber] = useState("");
    const navigate = useNavigate();
    const [otp, setOtp] = useState("");
    const { setResult , setPhoneNumber } = useContext(GetResultContext);

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
        if (number === "" || number === undefined || number.length < 12) {
            return setError("Số điện thoại không hợp lệ");
        }
        try {
            // const response = await setUpRecaptha(number);
            // console.log(response);
            // setResult(response);
            // console.log(otp);
            setPhoneNumber(number);
            navigate("/user/verify/otp");
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
                                <div>
                                    <PhoneInput
                                        value={number}
                                        onChange={setNumber}
                                        placeholder="Số điện thoại của bạn"
                                        defaultCountry="VN"
                                    />
                                </div>
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