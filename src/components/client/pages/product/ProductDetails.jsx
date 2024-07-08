import React, { useState } from 'react';
import '../../styles/ProductDetails.css';
import ProductDetailsFooter from './ProductDetailsFooter';
import DiamondModal from './DiamondModal'; // Import modal component
import EditIcon from '@mui/icons-material/Edit';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import Header from '../../partials/Header';
import Footer from '../../partials/Footer';

const ProductDetails = () => {
    const [selectedSize, setSelectedSize] = useState('');
    const [isSizeDropdownOpen, setIsSizeDropdownOpen] = useState(false);
    const [selectedMaterial, setSelectedMaterial] = useState('Vàng 10K trắng');
    const [selectedMainStone, setSelectedMainStone] = useState('ĐÁ CZ WHIR4.0x1');
    const [selectedSecondaryStone, setSelectedSecondaryStone] = useState('KC ĐIA WHIR1.3x8');
    const [mainImage, setMainImage] = useState('/mnt/data/image.png');
    const [isZoomed, setIsZoomed] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const ringSizes = Array.from({ length: 30 }, (_, i) => i + 4);

    const toggleSizeDropdown = () => {
        setIsSizeDropdownOpen(!isSizeDropdownOpen);
    };

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
        setIsSizeDropdownOpen(false);
    };

    const handleThumbnailClick = (imageUrl) => {
        setMainImage(imageUrl);
        setIsZoomed(false); // Reset zoom when changing images
    };

    const toggleZoom = () => {
        setIsZoomed(!isZoomed);
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <Header />
            <div className="product-details-container">
                <div className="product-details-wrapper">
                    <div className="product-details">
                        <div className="image-section">
                            <div className="main-image-container" onClick={toggleZoom}>
                                <img
                                    className={`main-image ${isZoomed ? 'zoomed' : ''}`}
                                    src={mainImage}
                                    alt="Product"
                                />
                            </div>
                            <div className="thumbnail-images">
                                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtcYbUTg8diYyYmQPeP0qhJeimSNs4FYJiYUPg7LgWaMKoyrcK" alt="Thumbnail 1" onClick={() => handleThumbnailClick('https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtcYbUTg8diYyYmQPeP0qhJeimSNs4FYJiYUPg7LgWaMKoyrcK')} />
                                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTprbFRt9KJ-jPfXGGwxLzgLHPgJYgX63vijapDAY_ge7-QMN3R" alt="Thumbnail 2" onClick={() => handleThumbnailClick('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTprbFRt9KJ-jPfXGGwxLzgLHPgJYgX63vijapDAY_ge7-QMN3R')} />
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrUtg_JAtu6GcxV2jF2EWqb_RcYwo9mNEBIeRbVZMKPG8AYiqP" alt="Thumbnail 3" onClick={() => handleThumbnailClick('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrUtg_JAtu6GcxV2jF2EWqb_RcYwo9mNEBIeRbVZMKPG8AYiqP')} />
                            </div>
                            
                        </div>
                        <div className="details-section">
                            <h1>Nhẫn nam kim cương tấm vàng 10K Pinnacle 2C W</h1>
                            <div className="price-section">
                                <p className="price">14,314,000₫</p>
                                <p className="old-price">19,881,000₫</p>
                                <div className="discount-badge">-28%</div>
                            </div>
                            <div className="separator"></div>
                            <div className="selectors">
                                <div className="selector">
                                    <label>Chất liệu</label>
                                    <select value={selectedMaterial} onChange={(e) => setSelectedMaterial(e.target.value)}>
                                        <option value="Vàng 10K trắng">Vàng 10K trắng</option>
                                        <option value="PT9">PT9</option>
                                    </select>
                                </div>
                                <div className="selector">
                                    <label>Viên chính</label>
                                    <select value={selectedMainStone} onChange={(e) => setSelectedMainStone(e.target.value)}>
                                        <option value="ĐÁ CZ WHIR4.0x1">ĐÁ CZ WHIR4.0x1</option>
                                        <option value="ĐÁ CZ">ĐÁ CZ</option>
                                    </select>
                                </div>
                                <div className="selector">
                                    <label>Viên phụ</label>
                                    <select value={selectedSecondaryStone} onChange={(e) => setSelectedSecondaryStone(e.target.value)}>
                                        <option value="KC ĐIA WHIR1.3x8">KC ĐIA WHIR1.3x8</option>
                                        <option value="KC ĐIA">KC ĐIA</option>
                                    </select>
                                </div>
                                <div className="separator"></div>
                                <div className="selector size-selector">
                                    <label>Ni (size)</label>
                                    <div className="custom-dropdown" onClick={toggleSizeDropdown}>
                                        {selectedSize || 'Chọn kích thước'}
                                    </div>
                                    {isSizeDropdownOpen && (
                                        <div className="size-dropdown-menu">
                                            <div className="grid-container">
                                                {ringSizes.map((size) => (
                                                    <div
                                                        key={size}
                                                        className={`grid-item ${size === selectedSize ? 'selected' : ''}`}
                                                        onClick={() => handleSizeSelect(size)}
                                                    >
                                                        {size}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    <a href="#" className="size-guide">Hướng dẫn chọn Ni (size)</a>
                                </div>
                            </div>
                            <div className="contact">
                                <p>Liên hệ <a href="tel:18009298">18009298</a> (miễn phí cước gọi) để được tư vấn chi tiết</p>
                            </div>
                            <div className="offers">
                                <h3>Ưu đãi</h3>
                                <ul>
                                    <li>Từ ngày 01-30/07/2024</li>
                                    <li>Số lượng có hạn!</li>
                                    <li>Quét QR VNPAY giảm thêm đến 250k</li>
                                    <li>Freeship toàn quốc 0đ</li>
                                </ul>
                            </div>
                            <div className="buttons">
                                <button className="combine" onClick={toggleModal}>
                                    <EditIcon /> KẾT HỢP VỚI KIM CƯƠNG
                                </button>
                                <div className="secondary-buttons">
                                    <button className="add-to-cart">
                                        <ShoppingCartIcon /> THÊM VÀO GIỎ HÀNG
                                    </button>
                                    <button className="buy-now">
                                        <CreditCardIcon /> MUA NGAY
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-details-info">
                        <h2>CHI TIẾT SẢN PHẨM</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Chất liệu</td>
                                    <td>{selectedMaterial}</td>
                                </tr>
                                <tr>
                                    <td>Viên chính</td>
                                    <td>{selectedMainStone}</td>
                                </tr>
                                <tr>
                                    <td>Viên phụ</td>
                                    <td>{selectedSecondaryStone}</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>
                            Sự phối hợp đầy phá cách và sống động từ vẻ đẹp lấp lánh của kim cương cùng hình ảnh
                            những bông hoa mùa xuân tươi đẹp đã tạo nên bộ trang sức Canzon chạm đến trái tim của hàng triệu phụ nữ.
                            Không chỉ dừng lại ở sự yêu kiều và diễm lệ, Canzon còn giúp tôn thêm sự sang trọng,
                            quý phái của bất cứ Quý Cô nào đang sở hữu.
                        </p>
                    </div>
                    <hr className="section-divider" />
                    <ProductDetailsFooter />
                </div>
                <DiamondModal isOpen={isModalOpen} onClose={toggleModal} />
            </div>
            {/* <PopularProducts /> */}
            <Footer />
        </>
    );
};

export default ProductDetails;
