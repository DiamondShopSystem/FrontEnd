import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import BoxProductDetail from '../../mixins/BoxProductDetail';


const ProductDetail = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetchData();
    }, []);

    // Lấy data thông qua API
    const fetchData = () => {
        axios.get(`${id}`,)
            .then(function (response) {
                setProduct(response.data.record);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <section className='container'>
            <BoxProductDetail product={product} key={product.id} />
            <div className='productdetail__description'>
                <h2>CHI TIẾT SẢN PHẨM</h2>
                {parse(`${product.description}`)}
            </div>
        </section>
    )
}

export default ProductDetail;