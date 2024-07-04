import React from 'react';
import '../../styles/CertificateModal.css';

const CertificateModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="certificate-modal-overlay">
            <div className="certificate-modal-content">
                <button className="certificate-modal-close" onClick={onClose}>×</button>
                <h2 className="certificate-modal-title">TRA CỨU GIẤY KIỂM ĐỊNH KIM CƯƠNG IGI</h2>
                <p>Kim cương được bán ra bởi Trùm Kim Cương luôn có đầy đủ giấy kiểm định quốc tế. Quý Khách có thể tra cứu xác thực giấy kiểm định trên website của IGI </p>
                <img src="https://file.hstatic.net/1000381168/file/igi_modal_b2ef2b045d044ea1934e3305c8c89b49.png" alt="Giấy kiểm định kim cương IGI" className="certificate-modal-image" />
            </div>
        </div>
    );
};

export default CertificateModal;
