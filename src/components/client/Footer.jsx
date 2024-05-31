import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import "./Footer.css";
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
import React from 'react';



const showAlert = () => {
    alert("hotline: 1800.69.69.69");
  }
const showAlert1 = () => {
    alert("hotline: 1800.21.21.21");
  }


const Footer = () => {
    
    return (
        <div className="footer">
            <hr class="separator"></hr>
            <main className="total1">
                <div className="intro">                    
                     <h2>© 2024 Công Ty Cổ Phần Trùm Kim Cương</h2>
                     <p>69 Đồ Sơn , P.Long Bình, TP.Thủ Đức </p>
                     <p>ĐT: 012 3456789 - Fax: 012 9999 8888</p>
                     <p><a href="https://cdn.pnj.io/images/quan-he-co-dong/2024/8c-20240131-PNJ-GCNDKDN-lan-36-CBTT.pdf">Giấy chứng nhận đăng ký doanh nghiệp: 419846703 </a> do Sở Kế hoạch & Đầu tư TP.HCM cấp lần đầu ngày 02/01/2004.<a href="https://cdn.pnj.io/images/quan-he-co-dong/2024/22b-20240507-PNJ-GXN-nganh-nghe-kinh-doanh-tu-ngay-04052024.pdf"> Ngành, nghề kinh doanh</a></p>                    
                </div>

                <div className="contact">
                    <p>Tổng đài hỗ trợ (08:00-21:00, miễn phí gọi)</p>
                    <p>Gọi mua: <a href="#" onClick={showAlert}> 1800696969</a> (phím 1)</p>
                    <p>Khiếu nại: <a href="#" onClick={showAlert1}> 1800212121</a> (phím 2)</p>
                </div>
               
                <div className="social-media">  
                <hr class="separator"></hr>
                    <div> 
                        <h4>KẾT NỐI VỚI CHÚNG TÔI</h4>
                    </div>
                    <div>                 
                        <ul className="icon1">
                            <li className="face">
                                 <a href=""><FaFacebook /></a>
                            </li>
                            <li className="insta">
                                 <a href=""><FaInstagram/></a> 
                            </li>
                            <li className="mail">
                                 <a href=""><IoIosMail /></a>     
                            </li>
                        </ul>
                    </div>   
                        <hr class="separator"></hr>  
                    <div> 
                        <ul className="thanhtoan-chungnhan">
                            <li>
                                <h4>PHƯƠNG THỨC THANH TOÁN</h4>
                            </li>
                            <li>
                                <h4>CHỨNG NHẬN</h4>
                                {/* link giấy chứng nhận */}
                            </li>
                        </ul>                       
                    </div>             
                </div>
                
            </main>
        </div>

    );
};
export default Footer;