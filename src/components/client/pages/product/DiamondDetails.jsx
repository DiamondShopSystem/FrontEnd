import React, { useState } from 'react';
import '../../styles/DiamondDetails.css';
import ProductDetailsFooter from './ProductDetailsFooter';
import CertificateModal from './CertificateModal';
import EditIcon from '@mui/icons-material/Edit';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import JewelryModal from './JewelryModal';
import Header from '../../partials/Header';
import Footer from '../../partials/Footer';
const DiamondDetails = () => {
    const [mainImage, setMainImage] = useState('/mnt/data/image.png');
    const [selectedQuality, setSelectedQuality] = useState('G');
    const [selectedPurity, setSelectedPurity] = useState('VS1');
    const [selectedCut, setSelectedCut] = useState('EX');
    const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);
    const [isJewelryModalOpen, setIsJewelryModalOpen] = useState(false);

    const toggleJewelryModal = () => {
        setIsJewelryModalOpen(!isJewelryModalOpen);
    };

    const handleThumbnailClick = (imageUrl) => {
        setMainImage(imageUrl);
    };

    const toggleCertificateModal = () => {
        setIsCertificateModalOpen(!isCertificateModalOpen);
    };

    return (
        <>
            <Header />
            <div className="diamond-details-container">
                <div className="diamond-details-wrapper">
                    <div className="diamond-details-content">
                        <div className="diamond-image-section">
                            <div className="diamond-main-image-container">
                                <img
                                    className="diamond-main-image"
                                    src={mainImage}
                                    alt="Diamond"
                                />
                            </div>
                            <div className="diamond-thumbnail-images">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgoT-Gi2y-KA3h9qPNWZOsMk-rT-WXOZXT2Y8-ezzKVSIG5KK0" alt="Thumbnail 1" onClick={() => handleThumbnailClick('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgoT-Gi2y-KA3h9qPNWZOsMk-rT-WXOZXT2Y8-ezzKVSIG5KK0')} />
                                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTH3wTnZSBthtJh_MC-2ZqHDjF7Pyr1olTgnntV34DdFKF08hoD" alt="Thumbnail 2" onClick={() => handleThumbnailClick('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTH3wTnZSBthtJh_MC-2ZqHDjF7Pyr1olTgnntV34DdFKF08hoD')} />
                                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSBOdUNSgu9VjQL0NKGYjKgPY4t4HWW1k-MytUYfQO0BS26VqFH" alt="Thumbnail 3" onClick={() => handleThumbnailClick('https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSBOdUNSgu9VjQL0NKGYjKgPY4t4HWW1k-MytUYfQO0BS26VqFH')} />
                            </div>
                            <div className="diamond-action-buttons">
                                <button className="diamond-action-button">
                                    <FavoriteBorderIcon /> Thích
                                </button>
                                <button className="diamond-action-button">
                                    <ShareIcon /> Chia sẻ
                                </button>
                            </div>
                        </div>
                        <div className="diamond-details-section">
                            <h1>Kim cương viên LUCKY STAR 3.4ly G VS1 EX</h1>
                            <div className="diamond-price-section">
                                <p className="diamond-price">11,740,000₫</p>
                                <p className="diamond-old-price">12,490,000₫</p>
                            </div>
                            <div className="diamond-selectors">
                                <div className="diamond-selector">
                                    <label>Nước</label>
                                    <select value={selectedQuality} onChange={(e) => setSelectedQuality(e.target.value)}>
                                        <option value="D">D</option>
                                        <option value="E">E</option>
                                        <option value="F">F</option>
                                    </select>
                                </div>
                                <div className="diamond-selector">
                                    <label>Độ Tinh Khiết</label>
                                    <select value={selectedPurity} onChange={(e) => setSelectedPurity(e.target.value)}>
                                        <option value="FL">FL (Flawless)</option>
                                        <option value="IF">IF (Internally Flawless)</option>
                                    </select>
                                </div>
                                <div className="diamond-selector">
                                    <label>Giác Cắt</label>
                                    <select value={selectedCut} onChange={(e) => setSelectedCut(e.target.value)}>
                                        <option value="EX">Excellent</option>
                                        <option value="VG">Very Good</option>
                                    </select>
                                </div>
                            </div>
                            <div className="diamond-selector">
                                <label>Giấy kiểm định</label>
                                <div className="diamond-certification" onClick={toggleCertificateModal} style={{ cursor: 'pointer' }}>
                                    <img src="https://file.hstatic.net/1000381168/file/igi_icon_55630ce8a5d24d98a891c9636e620f8d.png" alt="IGI" />
                                </div>
                            </div>
                            <div className="diamond-separator"></div>
                            <div className="diamond-offers">
                                <h3>Ưu đãi</h3>
                                <ul>
                                    <li>Từ ngày 01-30/07/2024</li>
                                    <li>Giảm 6%</li>
                                </ul>
                            </div>
                            <div className="diamond-buttons">
                                <button className="diamond-combine" onClick={toggleJewelryModal}>
                                    <EditIcon /> KẾT HỢP VỚI Ổ TRANG SỨC
                                </button>
                                <div className="diamond-secondary-buttons">
                                    <button className="diamond-add-to-cart">
                                        <ShoppingCartIcon /> THÊM VÀO GIỎ HÀNG
                                    </button>
                                    <button className="diamond-buy-now">
                                        <CreditCardIcon /> MUA NGAY
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="diamond-product-details-info">
                        <h2>CHI TIẾT SẢN PHẨM</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Nước</td>
                                    <td>{selectedQuality}</td>
                                </tr>
                                <tr>
                                    <td>Độ Tinh Khiết</td>
                                    <td>{selectedPurity}</td>
                                </tr>
                                <tr>
                                    <td>Giác Cắt</td>
                                    <td>{selectedCut}</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>
                            Kim cương viên LUCKY STAR với chất lượng tuyệt hảo và độ tinh khiết cao sẽ mang lại vẻ đẹp lấp lánh và sang trọng cho bất kỳ ai sở hữu. Sản phẩm đã được kiểm định bởi IGI, đảm bảo chất lượng và nguồn gốc rõ ràng.
                        </p>
                    </div>
                    <hr className="diamond-section-divider" />
                    <ProductDetailsFooter />
                </div>
                <CertificateModal isOpen={isCertificateModalOpen} onClose={toggleCertificateModal} />
                <JewelryModal isOpen={isJewelryModalOpen} onClose={toggleJewelryModal} />
            </div>
            <Footer />
        </>
    );
};

export default DiamondDetails;
