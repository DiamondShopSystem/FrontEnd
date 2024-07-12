import React from 'react'
import Header from '../../partials/Header.jsx'
import { Container } from 'react-bootstrap'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import DiamondIcon from '@mui/icons-material/Diamond';
import GrainIcon from '@mui/icons-material/Grain';
import '../../styles/SizeBraceletGuide.css'
import Footer from '../../partials/Footer.jsx';
import ScrollToTopButton from '../ScrollToTopButton.jsx';


const SizeBraceletGuide = () => {
    return (
        <>
            <Header />
            <Container>
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
                            Kiến thức trang sức
                        </Link>
                        <Typography
                            sx={{ display: 'flex', alignItems: 'center' }}
                            color="text.primary"
                        >
                            <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                            Hướng dẫn đo size lắc và vòng tay
                        </Typography>
                    </Breadcrumbs>
                </div>
                <div style={{ marginTop: '20px' }}><h2>Hướng dẫn đo size lắc và vòng tay</h2></div>
                <div className="sizeBracelet__guide">
                    <div className="table-of-contents">
                        <h2>Nội dung bài viết</h2>
                        <ul>
                            <li><a href="#section1">1. Tại sao lại cần phải đo size lắc, vòng tay?</a></li>
                            <li><a href="#section2">2. Cách cách đo size lắc tay, vòng tay</a>
                                <ul>
                                    <li><a href="#section2-1">2.1. Dùng thước đo lắc, vòng tay có sẵn</a></li>
                                    <li><a href="#section2-2">2.2. Đo thủ công</a></li>
                                </ul>
                            </li>
                            <li><a href="#section4">3. Kết luận</a></li>
                        </ul>
                    </div>
                    <div className="product-section" id="section1">
                        <h2>Tại sao lại cần phải đo size lắc, vòng tay?</h2>
                        <p>Đo size lắc tay để làm gì? Có khá nhiều người thắc mắc vấn đề này bởi họ nghĩ lắc tay thì cần gì phải đo, chỉ cần mua là có thể đeo vừa. Điều này không đúng bởi tay mỗi người thường to nhỏ khác nhau cũng như có rất nhiều loại lắc tay khác nhau nên kích cỡ của nó cũng không hề giống nhau.</p>
                    </div>

                    <div className="product-section" id="section2">
                        <h2>Cách cách đo size lắc, vòng tay</h2>
                        <div id="section2-1">
                            <h3>Đo bằng tờ giấy và thước</h3>
                            <p>Đo một chiếc lắc, vòng tay có sẵn chính là cách đơn giản nhất để tìm ra size lắc, vòng tay bạn cần.</p>
                            <h3>Đo lắc tay</h3>
                            <img alt='img-size-guide' src='https://www.pnj.com.vn/blog/wp-content/uploads/2022/11/huong-dan-do-size-lac-va-vong-tay-851x1024.png' />
                            <p>Bước 1: Dùng thước để đo chiều dài của chiếc lắc tay.</p>
                            <p>Bước 2: Lấy kết quả đo được đối chiếu số cm trên thước với thông số của bảng kích thước lắc tay như hình dưới.</p>
                            <p>Bước 3: Kích thước lắc tay của bạn chính là size số ghi dưới đường thẳng. Sau khi chọn size lắc, nhân viên PNJ sẽ gọi liên hệ xác nhận và tư vấn cụ thể để đảm bảo đáp ứng đúng yêu cầu của bạn.</p>
                            <h3>Đo vòng tay</h3>
                            <img alt='img-size-guide' src='https://www.pnj.com.vn/blog/wp-content/uploads/2022/07/huong-dan-do-size-lac-va-vong-tay-05.png.webp' />
                            <img alt='img-size-guide' src='https://www.pnj.com.vn/blog/wp-content/uploads/2022/07/huong-dan-do-size-lac-va-vong-tay-02-3.png.webp' />
                            <img alt='img-size-guide' src='https://www.pnj.com.vn/blog/wp-content/uploads/2022/09/huong-dan-do-size-lac-va-vong-tay-01-1024x547.png' />
                            <img alt='img-size-guide' src='https://www.pnj.com.vn/blog/wp-content/uploads/2022/07/huong-dan-do-size-lac-va-vong-tay-04.png' />
                        </div>
                        <p>Bước 1: Dùng thước để đo đường kính bên trong của chiếc vòng tay.</p>
                        <p>Bước 2: Lấy kết quả đo được đối chiếu số mm trên thước với thông số của bảng kích thước vòng tay như hình dưới.</p>
                        <p>Bước 3: Kích thước vòng tay của bạn chính là size số ghi dưới vòng tròn. Sau khi chọn size vòng, Tư vấn viên PNJ sẽ liên hệ xác nhận và tư vấn cụ thể để đảm bảo đáp ứng đúng yêu cầu của bạn.</p>
                        <div id="section2-2">
                            <h3>Đo thủ công</h3>
                            <p>Trường hợp bạn không có sẵn một chiếc vòng tay, lắc tay sẵn để đo, bạn có thể sử dụng những dụng cụ văn phòng cơ bản như một miếng giấy nhỏ (có thể thay bằng sợi dây/thước dây,…), một chiếc kéo, một cây thước và làm theo hướng dẫn sau:</p>
                            <img alt='img-size-guide' src='https://d3bpb7mvrje809.cloudfront.net/1670237508030.jpg' />
                            <p>Bước 1: Cắt tờ giấy A4 theo cạnh dài, có chiều rộng hẹp tượng trưng cho sợi dây.</p>

                            <p>Bước 2: Dùng mảnh giấy (sợi dây/thước dây,…) quấn quanh cổ tay đeo vòng, bạn lưu ý quấn trừ hao sao cho kích cỡ thoải mái một chút, dùng bút đánh dấu hoặc kéo cắt điểm giao nhau của hai đầu.</p>

                            <p>Bước 3: Trải căng dài mảnh giấy (sợi dây/thước dây,…) ra rồi dùng thước đo độ dài từ điểm đầu đến điểm đã đánh dấu.</p>

                            <p>Bước 4: Đối chiếu kích thước đường kính vừa tính (theo cm) với bảng kích thước vòng tay ở phần trước. Kích thước vòng của bạn tương ứng với size số ghi dưới vòng tròn.</p>

                        </div>
                    </ div>
                    <div className="product-section" id="section3">
                        <h2>Kết luận</h2>
                        <p>Hy vọng với những chia sẻ về 3 cách tự đo size vòng, lắc tay đơn giản tại nhà có thể giúp bạn lựa chọn được món trang sức vòng tay, lắc tay ưng ý, vừa vặn nhất cho bản thân và cho những người thương yêu!</p>
                        <img src='https://quocanhdiamond.vn/wp-content/uploads/2013/08/Lac-tay-kim-cuong-nam-Tennis-2-hang-2.jpg' />
                    </div>
                </div>

            </Container>
            <Footer />
            <ScrollToTopButton />
        </>
    )
}

export default SizeBraceletGuide