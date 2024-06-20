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
                <h1 className='mb-4'>Chi tiết danh mục</h1>
                <h3 className='mb-4'>Tên danh mục: {category.title}</h3>
                {(category.parent_id === "") ? <span></span> : <div className='mb-4'>Danh mục cha: <b>{category.parentTitle}</b></div>}
                {
                    (category.status === "active") ? (<span className='mb-4'>Trạng thái: <Badge style={{ width: 100.21 }} bg="success">Hoạt động</Badge></span>)
                        : ( <span className='mb-4'>Trạng thái: <Badge style={{ width: 100.21 }} bg="danger">Dừng hoạt động</Badge></span>)
                }
                <div className='mt-4'>Mô tả: {category.description}</div>
            </Container>
        </>
    )
}

export default DetailCategory