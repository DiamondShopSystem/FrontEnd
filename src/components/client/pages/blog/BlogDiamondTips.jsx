import React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import DiamondIcon from '@mui/icons-material/Diamond';
import GrainIcon from '@mui/icons-material/Grain';
import "../../styles/Client.css";

const BlogDiamondTips = () => {
    return (
        <div className='blog__blogdiamondtips'>
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
                        to="/blog"
                    >
                        <DiamondIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        Blog
                    </Link>
                    <Typography
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="text.primary"
                    >
                        <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        Cẩm nang mua kim cương
                    </Typography>
                </Breadcrumbs>
            </div>
            <div className="blogdiamondtips__container">
            <div className="blogdiamondtips__intro">
                    <h2>Tiêu chuẩn đánh giá kim cương</h2>
                    <h3>Xác định giá trị chính xác của từng viên kim cương trở thành vấn đề quan trọng, việc đánh giá này như thế nào để đáp ứng sự phát triển ngày càng lớn của thị trường. Do đó, các tổ chức chứng nhận đá quý đã ra đời, Viện nghiên cứu đá quý Gemological Institute of America được thành lập tại Mỹ vào năm 1935, năm 1940 phòng thí nghiệm Gubelin tại Lucern đã cấp chứng nhận kim cương...</h3>
                    <p>Để đánh giá một viên kim cương, các chuyên gia thường dựa trên 4 tiêu chí, gọi tắt là tiêu chí 4C, bao gồm: <i>Màu sắc (colour), độ trong suốt (clarity), khối lượng tính theo cara (cara weight), và kỹ thuật cắt (cut).</i></p>
                    <p>Người ta có thể sử dụng các thông số chi tiết hơn để chúng nhận về kích thước, độ sáng, các yếu tố tác động đến kim cương từ bên ngoài và bên trong...</p>
                </div>
                <div className="image" style={{ backgroundImage: 'url(https://file.hstatic.net/1000381168/file/baner-cnkc_pc_16c98418cb364672a3400ac8efd026bc.png)' }}>
                    <img className="blogdiamondtips__image" src="https://file.hstatic.net/1000381168/file/baner-cnkc-mobi_4083d5385c0f457e80e668383e66c4c0.png" alt="Cẩm nang kim cương" />
                </div>
                <h1>5 TIÊU CHÍ KHI CHỌN MUA KIM CƯƠNG</h1>
                <section className="blogdiamondtips__section">
                    <h2>Tiêu chí 1: Giấy Kiểm Định Kim Cương (Certificate)</h2>
                    <p>Tại TGKC, 100% kim cương viên đều có đầy đủ kiểm định quốc tế, uy tín từ hai tổ chức kiểm định kim cương lớn nhất thế giới đó là GIA & IGI.</p>
                    <div className="blogdiamondtips__images">
                        <img className="blogdiamondtips__image" src="https://file.hstatic.net/1000381168/file/gia_a2c1c95887564b4d8d22e08b96b5ef57.png" alt="kiem dinh gia" />
                        <img className="blogdiamondtips__image" src="https://file.hstatic.net/1000381168/file/igi_b265002bab294a358d1f9a74fce3241b.png" alt="kiem dinh IGI" />
                    </div>
                    <ul>
                        <b>Lưu ý:</b>
                        <li>Hai tổ chức kiểm định GIA và IGI <b>không mua bán, kinh doanh kim cương</b> mà là đơn vị kiểm định độc lập, nên đảm bảo kim cương được kiểm định một cách khách quan và có độ chính xác tuyệt đối.</li>
                        <li>GIA: Gemological Institute of America (Viện Đá Quý Hoa Kỳ)</li>
                        <li>IGI: International Gemological Institute (Viện Đá Quý Quốc Tế)</li>
                        <b>Đặc biệt Quý Khách có thể tự tra cứu Giấy Kiểm Định Kim Cương tại các đường dẫn sau:</b>
                        <li>GIA: <a href="https://www.gia.edu" target="_blank" rel="noopener noreferrer">https://www.gia.edu</a></li>
                        <li>IGI: <a href="https://www.igi.org" target="_blank" rel="noopener noreferrer">https://www.igi.org</a></li>
                    </ul>
                    <p><b>Trùm kim cương tư vấn:</b></p>
                    <ul>
                        <li>Theo chúng tôi Giấy kiểm định kim cương là một trong những tiêu chí quan trọng nhất.</li>
                        <li>Quý Khách nên lựa chọn các sản phẩm kim cương viên có đầy đủ kiểm định của GIA hoặc IGI.</li>
                    </ul>
                </section>

                <section className="blogdiamondtips__section">
                    <h2>Tiêu chí 2: Giác cắt (Cut)</h2>
                    <p>Kim cương có giá trị càng gần Excellent thì giá trị càng cao</p>
                    <div className="blogdiamondtips__cut-image">
                        <img className="blogdiamondtips__image" src="https://file.hstatic.net/1000381168/file/2_pc_c50d7f9c47d44fdd8c010ad7cb9f5a23.png" alt="Cut Chart" />
                    </div>
                    <p><i>Trùm kim cương tư vấn: Tùy vào ngân sách của mình, Quý khách có thể chọn giác cắt từ Very Good trở lên.</i></p>
                </section>

                <section className="blogdiamondtips__section">
                    <h2>Tiêu chí 3: Nước/Màu (Color)</h2>
                    <p>Kim cương có màu gần D thì giá trị càng cao</p>
                    <div className="blogdiamondtips__color-image">
                        <img src="https://file.hstatic.net/1000381168/file/cnkc-pc-_psd__07_458ca5848535457f9ae6e70a50ac906f.png" alt="Color Chart" />
                    </div>
                    <p><i>Trùm kim cương tư vấn: Tùy vào ngân sách của mình, Quý Khách có thể chọn nước từ H trở lên D.</i></p>
                </section>

                <section className="blogdiamondtips__section">
                    <h2>Tiêu chí 4: Độ Tinh Khiết (Clarity)</h2>
                    <p>Kim Cương có độ tinh khiết càng gần FL thì giá trị càng cao</p>
                    <div className="blogdiamondtips__clarity-image">
                        <img src="https://file.hstatic.net/1000381168/file/4_pc_c62a9116ad3a44c196d9b29e6c0bfd50.png" alt="Clarity Chart" />
                    </div>
                    <p><b>Lưu ý:</b> Chỉ sử dụng kính phòng đại 10x để xác định cấp độ tinh khiết.</p>
                    <p><i>Trùm kim cương tư vấn: Kim cương có độ tinh khiết càng gần FL thì giá trị càng cao.</i></p>
                </section>

                <section className="blogdiamondtips__section">
                    <h2>Tiêu chí 5: Kích cỡ kim cương (Carat Weight/Measurements)</h2>
                    <p>Kim cương có kích cỡ càng lớn thì giá trị càng cao</p>
                    <div className="blogdiamondtips__cut-image">
                        <img src="https://file.hstatic.net/1000381168/file/cnkc-pc-_psd__14_369f341f9043461e8e242a0952b4fd7a.png" alt="Carat Weight Chart" />
                    </div>
                    <p>Tại Việt Nam, Khách Hàng thường căn cứ vào đường kính viên kim cương khi chọn mua. Trên thế giới, người ta thường dùng trọng lượng viên kim cương (Carat Weight) để chọn mua.</p>
                    <p><i>Trùm kim cương tư vấn: Tùy vào ngân sách của mình, Quý khách có thể chọn viên kim cương có kích cỡ phù hợp với trang sức mà mình yêu thích.</i></p>
                </section>
            </div>
        </div>
    );
};

export default BlogDiamondTips;
