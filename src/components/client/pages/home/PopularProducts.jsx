import React, { useState , useEffect } from 'react'
import '../../styles/PopularProduct.css'
import axios from 'axios';
import Product from './Product'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

const PopularProducts = () => {
    const [popularProduct, setPopularProduct] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    
    // Lấy data thông qua API
    const fetchData = () => {
        axios.get('/', )
            .then(function (response) {
                setPopularProduct(response.data.popularProducts);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    
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


    return (
        <section className='section-item' style={{backgroundColor: '#fff'}}>
            <div className='title-item'>
                <h3>Sản Phẩm Nổi Bật</h3>
                <Link>Xem thêm {'>'}</Link>
            </div>

            <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000} keyBoardControl={true} itemClass='cover-item'>
                {popularProduct.map((item) => {
                    return <Product product={item} key={item.id} />
                })}
            </Carousel>
        </section>
    )
}

export default PopularProducts
