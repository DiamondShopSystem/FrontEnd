// PaymentGuidePage.jsx
import React from 'react';
import BlogLayout from './BlogLayout.jsx'; // Import BlogLayout component

const articles = [
    { id: 1, title: "Hướng dẫn mua hàng trả góp", date: "20/06/2024", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJshyY08fXkV39syu6oXTH8gHD-lMJtWt2rQ&s", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in dui accumsan volutpat." },
    { id: 2, title: "Hướng dẫn thanh toán đơn hàng", date: "21/06/2024", image: "https://heybay.vn/wp-content/uploads/2022/12/529a019386ee7fcf2ad4e0e4ba429b3d-369564a6adf479767222e60ab5cf485c-h-ng-d-n-thanh-toan-online-thanh-toan-1.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in dui accumsan volutpat." },
    { id: 3, title: "Quy định trả góp", date: "22/06/2024", image: "https://cdn.thuvienphapluat.vn/phap-luat/2022/KhanhHuyen/27-7-7.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in dui accumsan volutpat." }
];

function PaymentGuidePage() {
    return (
        <BlogLayout articles={articles} />
    );
}

export default PaymentGuidePage;
