import React from 'react';
import '../../../styles/DiamondModal.css';

const DiamondModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>×</button>
                <h2 className="modal-title">Kết Hợp Với Kim Cương</h2>
                <div className="modal-body">
                    <div className="form-group">
                        <label>Loại Kim Cương</label>
                        <select>
                            <option>Kim cương lucky star</option>
                            <option>Kim cương GIA</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Kích Cỡ Đường Kính (Ly)</label>
                        <select>
                            <option>1.0</option>
                            <option>1.5</option>
                            <option>2.0</option>
                            <option>2.5</option>
                            <option>3.0</option>
                            <option>3.5</option>
                            <option>4.0</option>
                            <option>4.5</option>
                            <option>5.0</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Nước</label>
                        <select>
                            <option>D</option>
                            <option>E</option>
                            <option>F</option>
                            <option>G</option>
                            <option>H</option>
                            <option>I</option>
                            <option>J</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Độ Tinh Khiết</label>
                        <select>
                            <option>FL (Flawless)</option>
                            <option>IF (Internally Flawless)</option>
                            <option>VVS1 (Very Very Slightly Included 1)</option>
                            <option>VVS2 (Very Very Slightly Included 2)</option>
                            <option>VS1 (Very Slightly Included 1)</option>
                            <option>VS2 (Very Slightly Included 2)</option>
                            <option>SI1 (Slightly Included 1)</option>
                            <option>SI2 (Slightly Included 2)</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Giác Cắt</label>
                        <select>
                            <option>Excellent</option>
                            <option>Very Good</option>
                            <option>Good</option>
                            <option>Fair</option>
                            <option>Poor</option>
                        </select>
                    </div>
                    <button className="modal-submit">Chọn Ngay Kim Cương Phù Hợp</button>
                </div>
            </div>
        </div>
    );
};

export default DiamondModal;
