import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Badge from 'react-bootstrap/Badge';
import parse from 'html-react-parser';
import '../../styles/Admin.css'


const DetailDiamond = (req, res) => {
    const [diamond, setDiamond] = useState([]);
    const [category, setCategory] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        axios.get("/admin/diamond/detail/" + id)
            .then(function (response) {
                setDiamond(response.data.record);
                setCategory(response.data.category);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    return (
        <>
            <Container style={{ marginTop: '20px' }} >
                <h1 className='mb-4'>Chi tiết sản phẩm</h1>
                <b><h3 className='mb-4'>Tên sản phẩm: <b>{diamond.title}</b></h3></b>
                <img className='mb-4' src={diamond.thumbnail} style={{ width: '200px', height: 'auto' }} />
                <h4 className='mb-4'>Danh mục: <b>{category.title}</b></h4>
                {
                    (diamond.status === "active") ? (<div><span className='mb-4'><b>Trạng thái:</b> <Badge style={{ width: 100.21 }} bg="success">Hoạt động</Badge></span></div>)
                        : (<div><span className='mb-4'><b>Trạng thái: </b> <Badge style={{ width: 100.21 }} bg="danger">Dừng hoạt động</Badge></span></div>)
                }
                <div className='mb-4 mt-2'>Giá: <b>{diamond.price}</b></div>
                <div className='mb-4 mt-2'>Nước: <b>{diamond.color}</b></div>
                <div className='mb-4 mt-2'>Độ tinh khiết: <b>{diamond.clarity}</b></div>
                <div className='mb-4 mt-2'>Giác cắt: <b>{diamond.cut}</b></div>
                <div className='mt-4'>Mô tả: {parse(`${diamond.description}`)}</div>
            </Container>
        </>
    )
}

export default DetailDiamond;