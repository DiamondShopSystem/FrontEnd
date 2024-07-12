import React, { useEffect, useState } from 'react'
import axios from 'axios';
import BoxProduct from '../../mixins/BoxProduct';
import { useLocation } from 'react-router-dom';
import '../../styles/ProductsPage.css'

const ProductsPage = () => {
    const location = useLocation();
    const getSlugFromUrl = () => {
        const currentUrl = window.location.pathname;
        return currentUrl.split('/products/')[1];
    };
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchData();
    }, [location.pathname]);

    // Lấy data thông qua API
    const fetchData = () => {
        const slug = getSlugFromUrl();
        axios.get(`/products/${slug}`,)
            .then(function (response) {
                setProducts(response.data.records);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    return (
        <>
            <section className='productspage__container'>
                <div className='productspage__banner'>
                    <img style={{ width: '100%' }} alt='header-image' src='https://file.hstatic.net/1000381168/collection/1920x820px_c920d1d4bbd04d84b13ad580976272cd.png' />
                </div>
                <div className='container'>
                    <div className='row productspage__gird'>
                        {products.map((item) => {
                            console.log(products);
                            return <BoxProduct className='col-3' product={item} key={item.id} />
                        })}
                    </div>
                </div>

            </section>
        </>

    )
}

export default ProductsPage;