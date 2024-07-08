import React from 'react';
import Slider from 'react-slick';
import '../../styles/Promotion.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '../../partials/Header';
import Footer from '../../partials/Footer';

const Promotion = () => {
    const promotions = [
        { id: 1, image: 'https://file.hstatic.net/1000381168/file/km1_88572ce624384830b5b82af7cd0203d3.png' },
        { id: 2, image: 'https://file.hstatic.net/1000381168/file/km2_51761d3ba17a4bbdb5f0ad92cc2b946f.png' },
        { id: 3, image: 'https://file.hstatic.net/1000381168/file/km3_127d466ff3ec47a2bd7f0157462b5dc3.png' },
        { id: 4, image: 'https://file.hstatic.net/1000381168/file/km4_229268304f684c45a804c3023c1e9b84.png' },
    ];

    const carouselItems = [
        { id: 1, title: 'Nhẫn', image: 'https://cdn.pnj.io/images/image-update/2020/hot-categories/nhankimcuong.png' },
        { id: 2, title: 'Bông tai', image: 'https://cdn.pnj.io/images/image-update/2020/hot-categories/bongtaivang.png' },
        { id: 3, title: 'Lắc & Vòng tay', image: 'https://cdn.pnj.io/images/image-update/2020/hot-categories/lacvang.png' },
        { id: 4, title: 'Dây chuyền', image: 'https://cdn.pnj.io/images/image-update/2020/hot-categories/daychuyenvang.png' },
        { id: 5, title: 'Dây cổ', image: 'https://cdn.pnj.io/images/image-update/2020/hot-categories/dayco.png' },
        { id: 6, title: 'Charm', image: 'https://cdn.pnj.io/images/image-update/2020/hot-categories/charm.png' },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="promotion">
                <header className="promotion__header">
                    <div className="promotion__title-container">
                        <h1 className="promotion__title">ƯU ĐÃI ĐỘC QUYỀN ONLINE </h1>
                    </div>
                    <div className="promotion__subtitle">
                        <span>TRANG SỨC VÀNG ƯU ĐÃI ĐẾN 20%</span>
                        <span className="divider">|</span>
                        <span>TRANG SỨC BẠC ƯU ĐÃI ĐẾN 40%</span>
                    </div>
                    <div className="promotion__carousel-container">
                        <Slider {...settings} className="promotion__carousel">
                            {carouselItems.map((item) => (
                                <div key={item.id} className="promotion__carousel-item">
                                    <img className="promotion__carousel-img" src={item.image} alt={item.title} />
                                    <p className="promotion__carousel-text">{item.title}</p>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <button className="promotion__store-button">Xem tất cả</button>
                    <div className="promotion__main-banner">
                        <img className="promotion__img-fluid" src="https://cdn.pnj.io/images/promo/210/combo-t5-24-1200x450-2.jpg" alt="Main Banner" />
                    </div>
                </header>
                <header className="promotion__header promotion__section-separator">
                    <div className="promotion__title-container">
                        <h1 className="promotion__title"> KHUYẾN MÃI TRONG THÁNG</h1>
                    </div>
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
        </>
    );
};

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} promotion__arrow promotion__arrow--next`}
            style={{ ...style }}
            onClick={onClick}
        />
    );
};

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} promotion__arrow promotion__arrow--prev`}
            style={{ ...style }}
            onClick={onClick}
        />
    );
};

export default Promotion;
