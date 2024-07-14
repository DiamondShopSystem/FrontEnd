import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../../../styles/Admin.css'

const DetailCustomer = () => {
    const { id } = useParams();
    const [customer, setCustomer] = useState({});
    useEffect(() => {
        axios.get("/admin/account/customer/detail/" + id)
            .then(function (response) {
                setCustomer(response.data.record);
            })
            .catch(error => {
                console.error('Error fetching staff account:', error);
            });
    }, []);

    return (
        <Container className='detail__container'>
            <h1 className='mb-4'>Chi tiết tài khoản khách hàng</h1>
            {customer.fullName === "" ? <div className='mb-4'>Họ và tên:</div> : <div className='mb-4'>Họ và tên: <b>{customer.fullName}</b></div>}
            <h3 className='mb-4'>SĐT: <b>{customer.phoneNumber}</b></h3>
            {
                customer.status === "active" ?
                    <span className='mb-4'>Trạng thái: <Badge bg="success">Hoạt động</Badge></span> :
                    <span className='mb-4'>Trạng thái: <Badge bg="danger">Dừng hoạt động</Badge></span>
            }
        </Container>
    )
}

export default DetailCustomer;