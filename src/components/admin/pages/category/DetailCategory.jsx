import React, { useState, useEffect } from 'react'
import '../../styles/Category.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Button, Form, Input, Radio } from 'antd';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Badge from 'react-bootstrap/Badge';




const DetailCategory = (req, res) => {

    const [category, setCategory] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        console.log("Hello");
        console.log(id);
        axios.get("/admin/category/detail/" + id)
            .then(function (response) {
                console.log(response.data.category);
                setCategory(response.data.category);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    return (
        <>
            <Container className='admindetailcategory__container'>
                <h1>Chi tiết danh mục</h1>
                <h3>Tên danh mục: {category.title}</h3>
                {
                    (category.status === "active") ? (<Badge style={{ width: 100.21 }} bg="success">Đang hoạt động</Badge>)
                        : (<Badge style={{ width: 100.21 }} bg="danger">Không hoạt động</Badge>)
                }
            </Container>
        </>
    )
}

export default DetailCategory