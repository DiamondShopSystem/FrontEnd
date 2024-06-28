import React from 'react';
import '../../../styles/JewelryModal.css';

const JewelryModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="jewelry-modal-overlay">
            <div className="jewelry-modal-content">
                <button className="jewelry-modal-close" onClick={onClose}>×</button>
                <h2 className="jewelry-modal-title">KẾT HỢP VỚI Ổ (VỎ) TRANG SỨC</h2>
                <div className="jewelry-modal-body">
                    <div className="form-group">
                        <label>Tuổi Vàng</label>
                        <select>
                            <option>Vàng 10K</option>
                            <option>Vàng 14K</option>
                            <option>Vàng 18K</option>
                            <option>Platinum 850 </option>
                            <option>Platinum 950 </option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Bộ Sưu Tập</label>
                        <select>
                            <option>Dây Chuyền</option>
                            <option>Lắc Tay</option>
                            <option>Nhẫn Nam</option>
                            <option>Nhẫn Nữ</option>
                            <option>Bông Tai</option>
                        </select>
                    </div>
                </div>
                <button className="jewelry-modal-submit">Chọn Ngay Ổ Trang Sức Phù Hợp</button>
            </div>
        </div>
    );
};

export default JewelryModal;
