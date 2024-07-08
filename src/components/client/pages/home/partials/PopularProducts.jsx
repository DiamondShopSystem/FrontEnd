import React, { useState, useEffect } from 'react'
import axios from 'axios';
import BoxProduct from '../../../mixins/BoxProduct';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../../../styles/Home.css';

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

    const [popularProducts, setPopularProducts] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    // Lấy data thông qua API
    const fetchData = () => {
        axios.get('/',)
            .then(function (response) {
                setPopularProducts(response.data.popularProducts);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <section className='home__section' style={{ backgroundColor: '#fff' }}>
            <div className='home__title'>
                <h3>Sản Phẩm Nổi Bật</h3>
            </div>
            <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000} keyBoardControl={true} itemClass='home__coveritem'>
                {popularProducts.map((item) => {
                    return <BoxProduct product={item} key={item.id} />
                })}
            </Carousel>
        </section>
    )
}

export default PopularProducts;
