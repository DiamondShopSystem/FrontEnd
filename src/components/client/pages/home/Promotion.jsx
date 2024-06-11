import React from 'react';
import '../../styles/Promotion.css';

const Promotion = () => {
    const promotions = [
        { id: 1, image: 'https://file.hstatic.net/1000381168/file/km1_88572ce624384830b5b82af7cd0203d3.png' },
        { id: 2, image: 'https://file.hstatic.net/1000381168/file/km2_51761d3ba17a4bbdb5f0ad92cc2b946f.png' },
        { id: 3, image: 'https://file.hstatic.net/1000381168/file/km3_127d466ff3ec47a2bd7f0157462b5dc3.png' },
        { id: 4, image: 'https://file.hstatic.net/1000381168/file/km4_229268304f684c45a804c3023c1e9b84.png' },
    ];

    return (
        <div className="promotion">
            <header className="promotion__header">
                <h1 className="promotion__title">Khuyến Mãi Trong Tháng</h1>
                <button className="promotion__store-button">Toàn Hệ Thống Cửa Hàng</button>
            </header>
            <main className="promotion__main">
                <div className="promotion__main-banner">
                    <img className="promotion__img-fluid" src="https://file.hstatic.net/1000381168/file/km-nam-nang_eee156e9b6c24adcbea7d09b23ccaf07.png" alt="Main Banner" />
                </div>
                <div className="promotion__grid">
                    {promotions.map((promo) => (
                        <div key={promo.id} className="promotion__card">
                            <img className="promotion__img-fluid" src={promo.image} alt={`Promotion ${promo.id}`} />
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Promotion;
