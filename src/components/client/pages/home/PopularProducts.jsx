import React from 'react'
import '../../styles/PopularProduct.css'
// import GetPopularProduct from './GetPopularProduct'
// import picture from '../../../../Assets/logo.png'
import Product from './Product'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

const PopularProducts = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const GetPopularProduct = [
        {
            id: 1,
            name: "Kim cương 24 cara",
            // image: picture,
            price: 24000,
        },
    
        {
            id: 2,
            name: "Kim cương 24 cara",
            // image: picture,
            price: 24000,
        },
    
        {
            id: 3,
            name: "Kim cương 24 cara",
            // image: picture,
            price: 24000,
        },
    
        {
            id: 4,
            name: "Kim cương 24 cara",
            // image: picture,
            price: 24000,
        },
    
        {
            id: 5,
            name: "Kim cương 24 cara",
            // image: picture,
            price: 24000,
        },
    
        {
            id: 6,
            name: "Kim cương 24 cara",
            // image: picture,
            price: 24000,
        },
    ];

    return (
        <section className='section-item'>
            <div className='title-item'>
                <h3>Sản phẩm phổ biến</h3>
                <Link>Xem thêm {'>'}</Link>
            </div>

            <Carousel responsive={responsive}>
                {GetPopularProduct.map((item) => {
                    return <Product product={item} key={item.id} />
                })}
            </Carousel>
        </section>
    )
}

export default PopularProducts
