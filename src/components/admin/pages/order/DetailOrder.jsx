import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Badge from 'react-bootstrap/Badge';
import parse from 'html-react-parser';
import '../../styles/Admin.css'


const DetailDiamond = (req, res) => {
    const [diamond, setDiamond] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        axios.get("/admin/order/detail/" + id)
            .then(function (response) {
                setDiamond(response.data.record);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);
    const getStatusClass = (status) => {
        switch (status) {
            case 'Đã hoàn thành':
                return 'bg-success';
            case 'Đang vận chuyển':
                return 'bg-info';
            case 'Đang xử lí':
                return 'bg-warning';
            default:
                return 'bg-secondary';
        }
    };

    return (
        <>
            <Container style={{ marginTop: '20px' }} >
                <h1 className='mb-4'>Chi tiết sản phẩm</h1>
                <b><h3 className='mb-4'>Tên sản phẩm: <b>{order.title}</b></h3></b>                <img className='mb-4' src={order.thumbnail} style={{ width: '200px', height: 'auto' }} />
                <h4 className='mb-4'>Danh mục: <b>{order.category}</b></h4>
                <div className='mb-4 mt-2'>Đơn giá: <b>{order.price}</b></div>
                <div className='mb-4 mt-2'>Số lượng: <b>{order.quantity}</b></div>
                <p>Trạng thái: <span className={`badge ${getStatusClass(order.status)}`}>{order.status}</span></p>
                <div className='mb-4 mt-2'>Thành tiền: <b>{order.totalPrice}</b></div>
            </Container>
        </>
    )
}

export default DetailDiamond;