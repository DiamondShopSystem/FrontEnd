import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import '../../styles/BoxProductDetail.css';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const DiamondDetail = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const diamond = {
        title: "Kim cương",
        thumbnail: "https://i.natgeofe.com/k/905d83a3-45ed-46d1-8717-833d30b8c964/diamond-polished_4x3.jpg",
        price: 5000000,
        color: "D",
        clarity: "VS1",
        cut: "Excellent"
    };

    return (
        <section className='container'>
            <ToastContainer />
            <div className='productdetail__info'>
                <div>
                    <form className='row'>
                        <div className='col-6'>
                            <img className='boxproductdetail__image' src={diamond.thumbnail} alt='Ảnh sản phẩm' />
                        </div>
                        <div className='col-6'>
                            <div className='boxproductdetail__content'>
                                <div className="boxproductdetail__content-header">
                                    <h2>{diamond.title}</h2>
                                    <p>{diamond.price.toLocaleString()}đ</p>
                                </div>
                                <div className="boxproductdetail__content-center">
                                    <div>
                                        <p><b>Nước:</b> {diamond.color}</p>
                                    </div>
                                    <div>
                                        <p><b>Độ Tinh Khiết:</b> {diamond.clarity}</p>
                                    </div>
                                    <div>
                                        <p><b>Giác Cắt:</b> {diamond.cut}</p>
                                    </div>
                                    <div>
                                        <p><b>Giấy Kiểm Định:</b>
                                            <img
                                                onClick={handleOpen}
                                                style={{ height: 20, cursor: 'pointer', marginLeft: '10px' }}
                                                src='https://file.hstatic.net/1000381168/file/igi_icon_55630ce8a5d24d98a891c9636e620f8d.png'
                                                alt='Giấy Kiểm Định'
                                            />
                                        </p>
                                    </div>
                                </div>
                                <div className="boxproductdetail__content-footer">
                                    <button className='addToCart__button' type="submit">🛒 Mua Ngay</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className='productdetail__description'>
                <h2>CHI TIẾT SẢN PHẨM</h2>
                {/* {parse(`${product.description}`)} */}
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="modal__box">
                    <Typography id="modal-modal-title" className="modal__title">
                        TRA CỨU GIẤY KIỂM ĐỊNH KIM CƯƠNG IGI
                    </Typography>
                    <Typography id="modal-modal-description" className="modal__description">
                        Kim cương được bán ra bởi Thế Giới Kim Cương luôn có đầy đủ giấy kiểm định quốc tế. Quý Khách có thể tra cứu xác thực giấy kiểm định trên website của IGI theo đường link bên dưới.
                        <img src='https://file.hstatic.net/1000381168/file/igi_modal_b2ef2b045d044ea1934e3305c8c89b49.png' className='modal__img' alt="Giấy Kiểm Định" />
                    </Typography>
                </Box>
            </Modal>
        </section>
    );
};

export default DiamondDetail;
