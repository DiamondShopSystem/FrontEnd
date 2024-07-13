import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import DiamondIcon from '@mui/icons-material/Diamond';
import GrainIcon from '@mui/icons-material/Grain';
import "../../styles/Client.css";

const faqs = [
    {
        title: "1. ĐẶT HÀNG VÀ THANH TOÁN",
        questions: [
            {
                q: "1. TKC có nhận đặt hàng làm theo mẫu của khách hàng hay không?",
                a: "Hiện TKC cung cấp dịch vụ thiết kế sản phẩm theo yêu cầu với chất liệu vàng đính kim cương. Quý khách vui lòng đến các cửa hàng PNJ hoặc liên hệ Hotline 1800 54 54 57 (hoàn toàn miễn phí) để được tư vấn cụ thể. Thời gian đặt hàng tùy thuộc vào từng mẫu sản phẩm, thường dao động trong khoảng từ 10 đến 25 ngày làm việc tùy thuộc vào mức độ phức tạp của sản phẩm."
            },
            {
                q: "2. Tôi đặt hàng online có ưu đãi được ưu đãi gì đặc biệt không?",
                a: "Chúng tôi có chính sách hỗ trợ Khách hàng khi đặt hàng online: Miễn phí giao hàng toàn quốc với đơn hàng tiêu chuẩn."
            },
            {
                q: "3. TKC hỗ trợ bao nhiêu hình thức thanh toán?",
                a: "Chúng tôi có hỗ trợ thanh toán tiền mặt, Zalo Pay, Thanh toán VNPay hoặc Thanh toán chuyển khoản."
            },
            {
                q: "4. Tôi có thể thay đổi hoặc hủy đơn hàng sau khi đã đặt không?",
                a: "Quý khách có thể thay đổi hoặc hủy đơn hàng trong vòng 24 giờ kể từ khi đặt hàng bằng cách liên hệ hotline hoặc email của chúng tôi."
            },
            {
                q: "5. Làm thế nào để theo dõi tình trạng đơn hàng của tôi?",
                a: "Quý khách có thể theo dõi tình trạng đơn hàng qua tài khoản cá nhân trên website của chúng tôi hoặc liên hệ hotline để được hỗ trợ."
            }
        ]
    },
    {
        title: "2. GIAO NHẬN HÀNG",
        questions: [
            { q: "1. Phí vận chuyển của TKC được tính như thế nào?", a: "Nhằm mang đến lợi ích cao nhất cho quý khách, TKC cung cấp dịch vụ giao hàng HOÀN TOÀN MIỄN PHÍ trên Toàn Quốc với đơn hàng tiêu chuẩn." },
            { q: "2. Thời gian giao hàng tiêu chuẩn trong bao lâu?", a: "Thời gian giao hàng từ 2 - 7 ngày làm việc tùy theo khu vực nhận hàng." },
            { q: "3. Tôi có thể yêu cầu giao hàng nhanh không?", a: "Chúng tôi có dịch vụ giao hàng nhanh với mức phí phụ thuộc vào địa chỉ nhận hàng. Quý khách vui lòng liên hệ để biết thêm chi tiết." },
            { q: "4. Nếu tôi không nhận được hàng, tôi phải làm gì?", a: "Quý khách vui lòng liên hệ ngay với hotline của chúng tôi để được hỗ trợ kiểm tra và giải quyết." }
        ]
    },
    {
        title: "3. CHÍNH SÁCH ĐỔI TRẢ BẢO HÀNH",
        questions: [
            { q: "1. Chính sách đổi trả?", a: "Bạn có thể đổi trả sản phẩm trong vòng 7 ngày kể từ ngày mua." },
            { q: "2. Chính sách bảo hành?", a: "Sản phẩm của chúng tôi được bảo hành 1 năm kể từ ngày mua." },
            { q: "3. Tôi cần làm gì để đổi trả sản phẩm?", a: "Quý khách vui lòng mang sản phẩm và hóa đơn đến cửa hàng gần nhất hoặc liên hệ hotline để được hướng dẫn chi tiết." },
            { q: "4. Sản phẩm của tôi bị lỗi, tôi phải làm sao?", a: "Quý khách vui lòng mang sản phẩm bị lỗi đến cửa hàng để được kiểm tra và bảo hành theo chính sách của chúng tôi." }
        ]
    },
    {
        title: "4. CHÍNH SÁCH THẺ THÀNH VIÊN",
        questions: [
            { q: "1. Lợi ích khi có thẻ thành viên?", a: "Bạn sẽ được ưu đãi giảm giá và tích điểm khi mua sắm." },
            { q: "2. Làm thế nào để trở thành thành viên?", a: "Quý khách có thể đăng ký thành viên tại các cửa hàng hoặc trên website của chúng tôi." },
            { q: "3. Thẻ thành viên có những hạng nào?", a: "Chúng tôi có các hạng thẻ thành viên như: Silver, Gold, Platinum, với những ưu đãi khác nhau." }
        ]
    },
    {
        title: "5. CẨM NANG SỬ DỤNG TRANG SỨC",
        questions: [
            { q: "1. Cách bảo quản trang sức?", a: "Nên tránh tiếp xúc với hóa chất và bảo quản trong hộp đựng trang sức." },
            { q: "2. Làm sạch trang sức như thế nào?", a: "Quý khách có thể làm sạch trang sức bằng cách dùng nước ấm pha loãng với xà phòng nhẹ và lau khô bằng khăn mềm." }
        ]
    },
    {
        title: "6. CÂU HỎI KHÁC",
        questions: [
            { q: "1. Hỗ trợ khác?", a: "Liên hệ chúng tôi qua hotline hoặc email để được hỗ trợ thêm." },
            { q: "2. Làm thế nào để liên hệ với bộ phận chăm sóc khách hàng?", a: "Quý khách có thể liên hệ qua hotline 1800 54 54 57 hoặc email của chúng tôi để được hỗ trợ." }
        ]
    }
];

const BlogFAQs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='blogfaqs__container'>
            <div className="breadcrumbs">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link
                            component={RouterLink}
                            underline="hover"
                            sx={{ display: 'flex', alignItems: 'center' }}
                            color="inherit"
                            to="/"
                        >
                            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                            Trang chủ
                        </Link>
                        <Link
                            component={RouterLink}
                            underline="hover"
                            sx={{ display: 'flex', alignItems: 'center' }}
                            color="inherit"
                            to="/size-guide"
                        >
                            <DiamondIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                            Blog
                        </Link>
                        <Typography
                            sx={{ display: 'flex', alignItems: 'center' }}
                            color="text.primary"
                        >
                            <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                            Câu Hỏi Thường Gặp | Mua Sắm Trực Tuyến Trùm Kim Cương
                        </Typography>
                    </Breadcrumbs>
                </div>
            <div className='blogfaqs__title'>
                <h1>Câu Hỏi Thường Gặp | Mua Sắm Trực Tuyến Trùm Kim Cương</h1>
            </div>
            {faqs.map((faq, index) => (
                <div key={index} className='blogfaqs__section'>
                    <button className='blogfaqs__button' onClick={() => toggleFAQ(index)}>
                        <h2>{faq.title}</h2>
                        <span className='blogfaqs__icon'>{activeIndex === index ? '-' : '+'}</span>
                    </button>
                    {activeIndex === index && (
                        <div className='blogfaqs__content'>
                            {faq.questions.map((q, i) => (
                                <div key={i} className='blogfaqs__item'>
                                    <h2 className='blogfaqs__question'>{q.q}</h2>
                                    <p className='blogfaqs__answer'>{q.a}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default BlogFAQs;
