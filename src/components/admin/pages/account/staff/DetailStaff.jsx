import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DetailStaff = () => {
    const [staff, setStaff] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get("/admin/account/staff/detail/" + id)
            .then(response => {
                console.log(response.data.record);
                setStaff(response.data.record);
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);

    return (
        <Container className='admindetailaccount__container'>
            <h1 className='mb-4'>Chi tiết tài khoản nhân viên</h1>
            {/* <img className='ma-4' src={staff.avatar}/>
            <h3 className='mb-4'>Tên nhân viên: {staff.fullName}</h3> */}
            <div className='mb-4'>Email: {staff.email}</div>
            {/* <div className='mb-4'>Vai trò: {staff.role}</div> */}
            {
                staff.status === "active" ?
                <span className='mb-4'>Trạng thái: <Badge bg="success">Hoạt động</Badge></span> :
                <span className='mb-4'>Trạng thái: <Badge bg="danger">Dừng hoạt động</Badge></span>
            }
        </Container>
    );
};

export default DetailStaff;
