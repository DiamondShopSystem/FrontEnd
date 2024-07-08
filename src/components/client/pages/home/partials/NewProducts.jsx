import React, { useState, useEffect } from 'react'
import "../../../styles/Home.css";
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import BoxProduct from '../../../mixins/BoxProduct';

const NewProducts = () => {

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

    const [newProducts, setNewProducts] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    // Lấy data thông qua API
    const fetchData = () => {
        axios.get('/',)
            .then(function (response) {
                setNewProducts(response.data.newProducts);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <section className='home__section' style={{backgroundColor: '#fff'}}>
            <div className='home__title'>
                <h3>Sản phẩm mới</h3>
            </div>
            <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000} keyBoardControl={true} itemClass='home__coveritem'>
                {newProducts.map((item) => {
                    return <BoxProduct product={item} key={item.id} />
                })}
            </Carousel>
        </section>
    )
}

export default NewProducts;
