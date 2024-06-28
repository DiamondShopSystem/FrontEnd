import React from 'react'
import Header from '../../partials/Header.jsx'
import { Container } from 'react-bootstrap'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import DiamondIcon from '@mui/icons-material/Diamond';
import GrainIcon from '@mui/icons-material/Grain';
import '../../styles/SizeRingGuide.css'
import Footer from '../../partials/Footer.jsx';
import ScrollToTopButton from '../../../helpers/ScrollToTopButton.jsx';

const SizeRingGuide = () => {
    return (
        <>
            <Header />
            <Container>
                <div className='breadcrumbs'>
                <Breadcrumbs aria-label="breadcrumb">
                        <Link
                            underline="hover"
                            sx={{ display: 'flex', alignItems: 'center' }}
                            color="inherit"
                            href="/"
                        >
                            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                            Trang chủ
                        </Link>
                        <Link
                            underline="hover"
                            sx={{ display: 'flex', alignItems: 'center' }}
                            color="inherit"
                            href="/test"
                        >
                            <DiamondIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                            Kiến thức trang sức
                        </Link>
                        <Typography
                            sx={{ display: 'flex', alignItems: 'center' }}
                            color="text.primary"
                        >
                            <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                            Cách Đo Size, Ni Nhẫn Nữ/Nam Chính Xác Và Đơn Giản
                        </Typography>
                    </Breadcrumbs>
                </div>
                <div style={{ marginTop: '20px' }}><h2>Cách Đo Size, Ni Nhẫn Nữ/Nam Chính Xác Và Đơn Giản</h2></div>
                <div className="sizeRing__guide">
                    {/* Bảng tóm tắt bài viết */}
                    <div className="table-of-contents">
                        <h2>Nội dung bài viết</h2>
                        <ul>
                            <li><a href="#section1">1. Tại sao lại cần phải đo size nhẫn?</a></li>
                            <li><a href="#section2">2. Cách cách đo size nhẫn</a>
                                <ul>
                                    <li><a href="#section2-1">2.1. Đo bằng tờ giấy và thước</a></li>
                                    <li><a href="#section2-2">2.2. Đo theo một chiếc nhẫn có sẵn</a></li>
                                    <li><a href="#section2-3">2.3. Đo bằng thước hoặc dụng cụ tròn đo size nhẫn</a></li>
                                </ul>
                            </li>
                            <li><a href="#section3">3. Những lưu ý khi đo size</a>
                                <ul>
                                    <li><a href="#section3-1">3.1. Kích cỡ ngón tay phụ thuộc vào nhiệt độ</a></li>
                                    <li><a href="#section3-2">3.2. Ảnh hưởng bởi chất liệu nhẫn</a></li>
                                    <li><a href="#section3-3">3.3. Đảm bảo kết quả đo chính xác</a></li>
                                    <li><a href="#section3-4">3.4. Chú ý đến độ dày nhẫn</a></li>
                                    <li><a href="#section3-5">3.5. Chú ý đến khớp tay đeo nhẫn</a></li>
                                    <li><a href="#section3-6">3.6. Đo size (ni) nhẫn của nam và nữ</a></li>
                                    <li><a href="#section3-7">3.7. Khi mua nhẫn online</a></li>
                                    <li><a href="#section3-8">3.8. Sử dụng bảng size (ni) nhẫn quốc tế</a></li>
                                    <li><a href="#section3-9">3.9. Cách chọn size nhẫn bí mật</a></li>
                                </ul>
                            </li>
                            <li><a href="#section4">4. Kết luận</a></li>
                        </ul>
                    </div>

                    <div className="product-section" id="section1">
                        <h2>Tại sao lại cần phải đo size nhẫn?</h2>
                        <p>Việc đo size nhẫn (hay còn gọi là ni nhẫn) là rất cần thiết để bạn có thể chọn được một chiếc nhẫn phù hợp với kích thước ngón tay của mình. Khi mua một chiếc nhẫn, nếu bạn không biết kích thước của ngón tay của mình thì có thể bạn sẽ mua phải một chiếc nhẫn quá to hoặc quá nhỏ so với ngón tay của mình. Điều này sẽ gây khó chịu và không thoải mái khi đeo nhẫn.</p>
                    </div>

                    <div className="product-section" id="section2">
                        <h2>Cách cách đo size nhẫn</h2>
                        <div id="section2-1">
                            <h3>Đo bằng tờ giấy và thước</h3>
                            <img alt='img-size-guide' src='https://cdn.shopify.com/s/files/1/0849/3147/7815/files/chon-size-nhan-bang-giay-thuoc_1024x1024_00d5a7a6-ab45-4c6f-b246-086666b61489.webp?v=1702458934' />
                        </div>
                        <div id="section2-2">
                            <h3>Đo theo một chiếc nhẫn có sẵn</h3>
                            <img alt='img-size-guide' src='https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/164680/Originals/cach-do-size-nhan-3.jpg' />
                        </div>
                        <div id="section2-3">
                            <h3>Đo bằng thước hoặc dụng cụ tròn đo size nhẫn</h3>
                            <img alt='img-size-guide' src='https://lili.vn/wp-content/uploads/2023/04/Do-size-ni-nhan-bang-bang-thuoc-hoac-dung-cu-tron-do-size.jpg' />
                        </div>
                    </div>

                    <div className="product-section" id="section3">
                        <h2>Những lưu ý khi đo size</h2>
                        <div id="section3-1">
                            <h3>Kích cỡ ngón tay phụ thuộc vào nhiệt độ</h3>
                            <p>Kích thước ngón tay của bạn có thể dao động nhẹ trong ngày, theo thời gian và tùy thuộc vào nhiệt độ. Nếu đo ngón tay thật của bạn, hãy đo vào buổi chiều khi tay bạn còn ấm để có kết quả tốt nhất. Nếu bạn nằm giữa hai cỡ nhẫn, hãy chọn cỡ lớn hơn (hoặc một nửa cỡ) để đảm bảo vừa vặn thoải mái.
                            </p>
                            <p>Kích thước ngón tay của bạn có thể dao động nhẹ trong ngày, theo thời gian và tùy thuộc vào nhiệt độ.</p>
                            <img src='https://vangduchung.com/wp-content/uploads/2023/08/Kich-thuoc-ngon-tay-cua-ban-phu-thuoc-vao-nhiet-do.jpg' />
                        </div>
                        <div id="section3-2">
                            <h3>Ảnh hưởng bởi chất liệu nhẫn</h3>
                            <p>Các chất liệu khác nhau sẽ có độ co giãn khác nhau, điều này sẽ ảnh hưởng đến kích thước của chiếc nhẫn khi bạn đeo nó. Vì vậy, nếu bạn muốn đo size của một chiếc nhẫn bằng chất liệu cụ thể, hãy đo kích thước trên một chiếc nhẫn có cùng chất liệu để đảm bảo sự chính xác</p>
                            <img src='https://www.meezjewelry.com/wp-content/uploads/2022/05/b-scaled-e1653470966822.jpg' />
                        </div>
                        <div id="section3-3">
                            <h3>Đảm bảo kết quả đo chính xác</h3>
                            <p>Luôn kiểm tra kỹ các phép đo và đo size nhẫn ở nhiều lần khác nhau để đảm bảo kết quả chính xác.</p>
                            <img src='https://tamanh.net/wp-content/uploads/2023/02/cach-do-size-nhan-bang-thuoc-day.jpg' />
                        </div>
                        <div id="section3-4">
                            <h3>Chú ý đến độ dày nhẫn</h3>
                            <p>Lưu ý đến độ dày của nhẫn, vì nhẫn dày hơn sẽ có size nhỏ hơn so với nhẫn mỏng.</p>
                            <img src='https://cdn.vuahanghieu.com/unsafe/0x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/news/content/2022/01/cach-do-kich-thuoc-nhan-4-jpg-1641450334-06012022132534.jpg' />
                        </div>
                        <div id="section3-5">
                            <h3>Chú ý đến khớp tay đeo nhẫn</h3>
                            <p>Các khớp tay có thể to hơn so với ở phía gốc của ngón. Do đó bạn cần phải đo kích thước ở khớp ngón và gốc ngón, sau đó lấy kích thước giữa 2 phần để chọn size nhẫn phù hợp. Lúc này tay đeo nhẫn của bạn sẽ có cảm giác thoải mái và không bị khó chịu khi co hoặc gập ngón tay.

                                Trong trường hợp khớp xương ngón tay của bạn to, bạn nên đo chu vi ở gần khớp (không phải trên khớp) sao cho khi bạn đeo nhẫn thì nhẫn dễ vào và không bị tuột mất.</p>
                            <img src='https://trangsucnacyjewelry.shop/wp-content/uploads/2024/04/de-y-den-khop-tay-khi-do-size-nhan.jpg' />
                        </div>
                        <div id="section3-6">
                            <h3>Đo size (ni) nhẫn của nam và nữ</h3>
                            <p>.Với nhẫn nam, thường thì ngón tay sẽ lớn hơn so với nhẫn nữ, do đó kích thước nhẫn nam sẽ lớn hơn kích thước nhẫn nữ. Ngoài ra, nhẫn nữ thường có kiểu dáng nhỏ gọn và thanh lịch hơn so với nhẫn nam, vì vậy nó sẽ có kích thước nhỏ hơn.

                                Đối với cách đo size nhẫn thì nhẫn của nam và nữ sẽ có cách đo tương tự nhau như ở trên.</p>
                            <img src='https://lili.vn/wp-content/uploads/2022/06/Nhan-cap-doi-bac-dinh-kim-cuong-Moissanite-Theophilus-LILI_672438_1.jpg' />
                        </div>
                        <div id="section3-7">
                            <h3>Khi mua nhẫn online</h3>
                            <p>Nếu bạn đang mua nhẫn online và có size cố định, hãy chắc chắn đo size nhẫn của bạn trước khi đặt hàng. Nếu không chắc chắn, hãy chọn những nhà cung cấp có chính sách đổi trả sản phẩm linh hoạt.

                                Ngoài ra, các shop khác nhau có thể có bảng size nhẫn khác nhau.</p>
                            <img src='https://lili.vn/wp-content/uploads/2023/04/Cua-hang-trang-suc-uy-tin.jpg' />
                        </div>
                        <div id="section3-8">
                            <h3>Sử dụng bảng size (ni) nhẫn quốc tế</h3>
                            <p>Bảng đo size nhẫn quốc tế (International Ring Size Chart) là một công cụ đo kích thước của nhẫn được sử dụng trên toàn thế giới và chia thành nhiều nước khác nhau. Bảng sử dụng đơn vị đo quốc tế và bao gồm nhiều kích thước. Khi bạn mua nhẫn ở các cửa hàng nước ngoài, có thể sử dụng bảng size nhẫn quốc tế để đảm bảo rằng bạn chọn được kích thước nhẫn phù hợp với ngón tay của mình.</p>
                            <img src='https://fado.vn/blog/wp-content/uploads/2023/10/Tham-khao-Bang-size-nhan-quoc-te-chuan-jpg.webp' />
                        </div>
                        <div id="section3-9">
                            <h3>Cách chọn size nhẫn bí mật</h3>
                            <p>Nếu bạn đang muốn tặng một chiếc nhẫn làm quà cho ai đó, nhưng không biết kích cỡ nhẫn của họ, thì nhẫn free size sẽ là lựa chọn tuyệt vời dành cho bạn.

                                Nhẫn free size (hay còn gọi là one size) là loại nhẫn có kích thước linh hoạt, thường được thiết kế để phù hợp với nhiều kích cỡ ngón tay khác nhau. Nhẫn free size phù hợp với hầu hết mọi người và bạn không cần phải lo lắng về việc chọn sai kích thước.</p>
                            <img src='https://lili.vn/wp-content/uploads/2021/11/Nhan-bac-nu-dinh-da-CZ-hinh-bong-hoa-dao-LILI_289467_1.jpg' />
                        </div>
                    </div>

                    <div className="product-section" id="section4">
                        <h2>Kết luận</h2>
                        <p>Đo size (ni) nhẫn là một bước quan trọng để chọn được nhẫn phù hợp và thoải mái cho ngón tay của bạn. Với phương pháp đo size nhẫn đơn giản và chính xác, bạn có thể dễ dàng lựa chọn được nhẫn mà mình yêu thích và phù hợp với ngón tay của mình. Tuy nhiên, hãy nhớ lưu ý các điểm quan trọng để đảm bảo kết quả đo chính xác nhất và tránh sai sót.

                            Hy vọng với bài viết này, bạn đã hiểu rõ hơn về cách đo size nhẫn và có thể chọn được size nhẫn phù hợp nhất với mình. Nếu bạn có bất kỳ câu hỏi thắc mắc hay ý kiến đóng góp nào, hãy liên hệ trực tiếp với LiLi để LiLi có thể giúp đỡ bạn thêm nhé!</p>
                        <img src='https://lili.vn/wp-content/uploads/2023/04/Dam-bao-ket-qua-do-size-nhan-chinh-xac.jpg' />
                    </div>
                </div>
            </Container>
            <Footer />
            <ScrollToTopButton /> 
        </>
    )
}

export default SizeRingGuide
