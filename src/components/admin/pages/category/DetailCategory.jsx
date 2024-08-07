import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Button, Form, Input, Radio } from 'antd';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Badge from 'react-bootstrap/Badge';
import parse from 'html-react-parser';
import '../../styles/Admin.css'

const DetailCategory = (req, res) => {

    const [category, setCategory] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        axios.get("/admin/category/detail/" + id)
            .then(function (response) {
                setCategory(response.data.record);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    return (
        <>
            <Container style={{marginTop: '20px'}} >
                <h1 className='mb-4'>Chi tiết danh mục</h1>
                <h3 className='mb-4'>Tên danh mục: <b>{category.title}</b></h3>
                {(category.parent_id === "") ? <span></span> : <div className='mb-4'>Danh mục cha: <b>{category.parentTitle}</b></div>}
                {
                    (category.status === "active") ? (<span className='mb-4'>Trạng thái: <Badge style={{ width: 100.21 }} bg="success">Hoạt động</Badge></span>)
                        : ( <span className='mb-4'>Trạng thái: <Badge style={{ width: 100.21 }} bg="danger">Dừng hoạt động</Badge></span>)
                }
                <div className='mt-4'>Mô tả: {parse(`${category.description}`)}</div>
            </Container>
        </>
    )
}

export default DetailCategory