import React, { useState, useEffect } from 'react'
import '../../styles/Category.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Button, Form, Input, Radio } from 'antd';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Badge from 'react-bootstrap/Badge';




const DetailProduct = (req, res) => {

    const [data, setData] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        axios.get("/admin/product/detail/" + id)
            .then(function (response) {
                console.log(response.data.data);
                setData(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    return (
        <>
            <Container className='admindetailcategory__container'>
                <h1 className='mb-4'>Chi tiết sản phẩm</h1>
                <h3 className='mb-4'>Tên sản phẩm: {data.title}</h3>
                {
                    (data.status === "active") ? (<span className='mb-4'>Trạng thái: <Badge style={{ width: 100.21 }} bg="success">Hoạt động</Badge></span>)
                        : (<span className='mb-4'>Trạng thái: <Badge style={{ width: 100.21 }} bg="danger">Dừng hoạt động</Badge></span>)
                }
                <div className='mt-4'>Mô tả: {data.description}</div>
            </Container>
        </>
    )
}

export default DetailProduct;