import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "../styles/BoxProductDetail.css";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom v6


const BoxProductDetail = ({ product }) => {
    const navigate = useNavigate(); // Hook useNavigate
    const { _id, title, thumbnail, price, mainGemStone, material, secondGemStone } = product;
    const [isOpen, setIsOpen] = useState(false);
    const [selectedSize, setSelectedSize] = useState(0);
    const sizes = Array.from({ length: 29 }, (_, i) => i + 4);
    const [record, setRecord] = useState(product);
    const { reset, setValue } = useForm();

    useEffect(() => {
        fetchData();
    }, []);

    const addToCart = async () => {
        const cartItems = new FormData();
        cartItems.append('product', _id)
        cartItems.append('quantity', 1)
        cartItems.append('price', price)
        console.log(cartItems);
        const configuration = {
            method: "post",
            url: "cart/add",
            cartItems
        };
        await axios(configuration)
            .then((result) => {
                console.log(result);
                const checkResult = result.data;
                // reset();
                navigate('/cart');
                if (checkResult.code === 200) {
                    toast.success('Thêm vào giỏ hàng thành công');
                } else {
                    toast.error('Không thành công');
                }
            })
            .catch((error) => {
                console.log(error);
                toast.error('Thêm mới không thành công');
            });
    };
    // Lấy data thông qua API
    const fetchData = () => {
        axios.get(`/${_id}`)
            .then(function (response) {
                setRecord(response.data.record);
                console.log(record);

            })
            .catch(function (error) {
                console.log(error);
            })

    }
    const toggleSizeDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
        console.log(size);
        setIsOpen(false);
    };

    return (
        <>
            <ToastContainer />
            <div >
                <form className='row' >
                    <div className='col-6'>
                        <img className='boxproductdetail__image' src={thumbnail} alt='Ảnh sản phẩm' />
                    </div>
                    <div className='col-6'>
                        <div className='boxproductdetail__content'>
                            <div className="boxproductdetail__content-header">
                                <h2>{title}</h2>
                                <p>{price}</p>
                            </div>
                            <div className="boxproductdetail__content-center">
                                <div>
                                    <p>Chất liệu: {material}</p>
                                </div>
                                <div>
                                    <p>Viên chính: {mainGemStone}</p>
                                </div>
                                <div>
                                    <p>Viên Phụ: {secondGemStone}</p>
                                </div>
                            </div>
                            <div className="boxproductdetail__content-footer">
                                <div className='content-footer__size'>
                                    <div className="size-selector">
                                        <div type='button' className="size-selector__button" onClick={toggleSizeDropdown}>
                                            {selectedSize ? `Size: ${selectedSize}` : 'Ni (size)'}
                                        </div>
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
                                <Link className='content-footer__link' to="/">Liên hệ với chúng tôi</Link> <br />
                                <button className='addToCart__button'
                                    onClick={() => {
                                        addToCart(product)
                                    }
                                    }>🛒 Mua Ngay</button>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </>
    );
}

export default BoxProductDetail;
