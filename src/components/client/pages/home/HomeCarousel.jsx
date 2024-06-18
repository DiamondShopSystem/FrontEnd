import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
    margin: 0,
    height: '34rem',
    lineHeight: '160px',
    width: '100%'

};

const HomeCarousel = () => {
    return (
        <>
            <Carousel arrows autoplay autoplaySpeed={3000}>
                <div>
                    <img src='https://cdn.pnj.io/images/promo/211/29-ngaydoi66-24-1972_x_640__CTA_.jpg' style={contentStyle} />
                </div>
                <div>
                    <img src='https://cdn.pnj.io/images/promo/210/main-THANG_06_-_CT_CHILDRENS_DAY-1972x640__CTA_.jpg' style={contentStyle} />
                </div>
                <div>
                    <img src='https://cdn.pnj.io/images/promo/210/Tabsale_T6_chung-1972x640-cta.jpg' style={contentStyle} />
                </div>
                <div>
                    <img src='https://cdn.pnj.io/images/promo/199/pnjfast-t1-24-1972x640CTA.jpg' style={contentStyle} />
                </div>
            </Carousel>
        </>
    )
}

export default HomeCarousel;