import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "../styles/BoxProductDetail.css";
import { Link } from 'react-router-dom';

const BoxProductDetail = ({ product }) => {
    const { _id, title, thumbnail, price, mainGemStone, material, secondGemStone, size } = product;
    console.log(mainGemStone);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedSize, setSelectedSize] = useState(null);
    const sizes = Array.from({ length: 29 }, (_, i) => i + 4);

    const addToCart = async () => {
        await axios.post(`/cart/add/${_id}`, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then((result) => {
                console.log(result);
                const checkResult = result.data;
                if (checkResult.code === 200) {
                    toast.success('Thêm vào giỏ hàng thành công');
                } else {
                    toast.error('Không thành công');
                }
            })
            .catch(error => {
                toast.error('Không thành công');
                console.log(error);
            });
    };

    const toggleSizeDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
        setIsOpen(false);
    };

    return (
        <>
            <ToastContainer />
            <div className='row'>
                <div className='col-6'>
                    <img className='boxproductdetail__image' src={'http://res.cloudinary.com/dg3bhx2ro/image/upload/v1720085566/frvyoq2ur1zchi9xtqgx.webp'} alt='Ảnh sản phẩm' />
                </div>
                <div className='col-6'>
                    <div className='boxproductdetail__content'>
                        <div className="boxproductdetail__content-header">
                            <h2>Nhẫn Kim Cương</h2>
                            <p>123456 VND</p>
                        </div>
                        <div className="boxproductdetail__content-center">
                            <div>
                                <p>Chất liệu: Kim Cương</p>
                            </div>
                            <div>
                                <p>Viên chính: BBBBB</p>
                            </div>
                            <div>
                                <p>Viên Phụ: EEEEE</p>
                            </div>
                        </div>
                        <div className="boxproductdetail__content-footer">
                            <div className='content-footer__size'>
                                <div className="size-selector">
                                    <button className="size-selector__button" onClick={toggleSizeDropdown}>
                                        {selectedSize ? `Size: ${selectedSize}` : 'Ni (size)'}
                                    </button>
                                    {isOpen && (
                                        <div className="size-selector__dropdown">
                                            {sizes.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="size-selector__item"
                                                    onClick={() => handleSizeSelect(item)}
                                                >
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <Link className='content-footer__link' to="/size-guide">Hướng dẫn chọn Ni (size)</Link>
                            </div>
                            <Link className='content-footer__link' to="/">Liên hệ với chúng tôi</Link> <br/>
                            <button className='addToCart__button' onClick={addToCart}>🛒 Mua Ngay</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BoxProductDetail;
