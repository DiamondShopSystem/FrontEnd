import { FaArrowLeft } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import "../../styles/UserLogin.css";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState, useContext } from "react";
import {
    RecaptchaVerifier,
    signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "../../../../config/firebase";
import { GetResultContext } from "../../../helpers/GetResultContext";




const UserLogin = () => {

    const navigate = useNavigate();
    const { setResult, setPhoneNumber } = useContext(GetResultContext);
    const [error, setError] = useState("");
    const [number, setNumber] = useState("");
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
        if (number === "" || number === undefined || number.length < 12)
            return setError("Số điện thoại không hợp lệ");
        try {
            const response = await setUpRecaptha(number);
            setPhoneNumber(number);
            setResult(response);
            navigate("/user/verify/otp");
        } catch (err) {
            return setError("Số điện thoại không hợp lệ");
        }
    };
    return (
        <div className="userlogin_container">
            <div className="userlogin_wrapper">
                <main className="userlogin_total">
                    <div className="userlogin_linkback">
                        <Link to="/" className="flex userlogin__linktohome" >
                            <div className="">
                                <FaArrowLeft />
                                <span className="userlogin_back">Trang chủ</span>
                            </div>
                        </Link>
                    </div>

                    <div className="flex w-full max-w-sm grow flex-col justify-center p-5">
                        <div className="text-center">
                            <div className="userlogin_welcome">
                                <img className="userlogin_logo" src="https://haianhuniform.com/wp-content/uploads/2022/04/logo-ao-lop-hinh-kim-cuong-den-trang.jpg" alt="new" />
                                <div className="mt-4">
                                    <h2 className="text-2xl font-semibold text-slate-600 dark:text-navy-100 ">Chào mừng trở lại</h2>
                                    <p className="text-slate-400 dark:text-navy-300">Vui lòng đăng nhập để tiếp tục</p>
                                </div>
                            </div>
                        </div>

                        <div className="userlogin_input">
                            <Form onSubmit={getOtp}>
                                <Form.Group className="mt-4" >
                                    <div className="phone-input-wrapper">
                                        <div className="userlogin__customphoneinput">
                                            <span className="userlogin__countrycode">+84</span>
                                            <PhoneInput
                                                defaultCountry="VN"
                                                value={number}
                                                onChange={setNumber}
                                                placeholder="Số điện thoại của bạn"
                                                countries={['VN']} // Chỉ cho phép quốc gia Việt Nam
                                            />
                                        </div>
                                    </div>

                                </Form.Group>
                                {error !== "" ? <div className="text-red-600">{error}</div> : <div className="text-red-600 d-none">{error}</div>}

                                <Button className="userlogin__button" type="submit">
                                    <span> SMS </span>
                                </Button>
                            </Form>
                        </div>
                        <div className="userlogin_benifit">
                            <div className="">
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
                    </div>
                </main>
            </div>
            <div id="recaptcha-container"></div>
        </div>
    );
};

export default UserLogin;