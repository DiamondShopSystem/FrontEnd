import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import BoxProductDetail from '../../mixins/BoxProductDetail';
import '../../styles/ProductDetail.css'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom v6

const ProductDetail = () => {
    const [product, setProduct] = useState([]);
    const navigate = useNavigate(); // Hook useNavigate
    const { id } = useParams();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedSize, setSelectedSize] = useState(0);
    // const sizes = Array.from({ length: 29 }, (_, i) => i + 4);
    useEffect(() => {
        fetchData();
    }, []);
    const addToCart = async (product) => {
        // const cartItems = new FormData();
        // cartItems.append('product', product._id)
        // cartItems.append('quantity', 1)
        // cartItems.append('price', product.price)
        // console.log(cartItems);
        const configuration = {
            method: "post",
            url: "cart/add",
            product
        };
        await axios(configuration)
            .then((result) => {
                console.log(result);
                const checkResult = result.data;
                // reset();
                alert("Thành công");
                // navigate('/cart');
                // if (checkResult.code === 200) {
                //     toast.success('Thêm vào giỏ hàng thành công');
                // } else {
                //     toast.error('Không thành công');
                // }
            })
            .catch((error) => {
                console.log(error);
                toast.error('Thêm mới không thành công');
            });
    };
    // Lấy data thông qua API
    const fetchData = () => {
        axios.get(`${id}`,)
            .then(function (response) {
                setProduct(response.data.record);
                console.log(response.data.record)
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    // const toggleSizeDropdown = () => {
    //     setIsOpen(!isOpen);
    // };

    // const handleSizeSelect = (size) => {
    //     setSelectedSize(size);
    //     console.log(size);
    //     setIsOpen(false);
    // };
    return (
        <section className='container'>
            <div className='productdetail__info'>
                <div >
                    <form className='row' >
                        <div className='col-6'>
                            <img className='boxproductdetail__image' src={product.thumbnail} alt='Ảnh sản phẩm' />
                        </div>
                        <div className='col-6'>
                            <div className='boxproductdetail__content'>
                                <div className="boxproductdetail__content-header">
                                    <h2>{product.title}</h2>
                                    <p>{product.price}</p>
                                </div>
                                <div className="boxproductdetail__content-center">
                                    <div>
                                        <p>Chất liệu: {product.material}</p>
                                    </div>
                                    <div>
                                        <p>Viên chính: {product.mainGemStone}</p>
                                    </div>
                                    <div>
                                        <p>Viên Phụ: {product.secondGemStone}</p>
                                    </div>
                                </div>
                                <div className="boxproductdetail__content-footer">
                                    <div className='content-footer__size'>
                                        {/* <div className="size-selector">
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
                                        </div> */}
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
                {/* <BoxProductDetail product={product} key={product.id} /> */}
            </div>
            <div className='productdetail__description'>
                <h2>CHI TIẾT SẢN PHẨM</h2>
                {parse(`${product.description}`)}
            </div>
        </section>
    )
}

export default ProductDetail;