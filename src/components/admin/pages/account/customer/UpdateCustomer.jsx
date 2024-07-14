import React, { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateCustomer = () => {
    const { id } = useParams();
    const [customer, setCustomer] = useState({});
    useEffect(() => {
        axios.get("/admin/account/customer/edit/" + id)
            .then(function (response) {
                setCustomer(response.data.record);
            })
            .catch(error => {
                console.error('Error fetching staff account:', error);
            });
    }, [id]);
    const updateCustomer = async (e) => {
        e.preventDefault();
        axios.patch("/admin/account/customer/edit/" + id, customer)
            .then((result) => {
                console.log(result);
                const checkResult = result.data;
                console.log(checkResult);
                toast.success('Cập nhật thành công');
            })
            .catch((error) => { console.log(error); toast.error('Cập nhật không thành công') })
    };
    return (
        <>
            <ToastContainer />
            <Container style={{ marginTop: '20px' }}>
                <h1>Chỉnh sửa tài khoản khách hàng</h1>
                <Form onSubmit={updateCustomer} encType='multipart/form-data'>
                    <Form.Group className="mb-3" style={{ width: '100%' }}>
                        <Form.Label>Họ và tên</Form.Label>
                        <Form.Control
                            disabled={true}
                            type="text"
                            name="fullName"
                            value={customer.fullName || ''}
                            onChange={(e) => setCustomer({ ...customer, fullName: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" style={{ width: '100%' }}>
                        <Form.Label>SĐT</Form.Label>
                        <Form.Control
                            disabled={true}
                            type="text"
                            name="phoneNumber"
                            value={customer.phoneNumber || ''}
                            onChange={(e) => setCustomer({ ...customer, phoneNumber: e.target.value })}
                        />
                    </Form.Group>

                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3" onChange={(e) => setCustomer({ ...customer, status: e.target.value })} >
                            <Form.Check
                                inline
                                label="Hoạt động"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                                value="active"
                                checked={customer.status === "active" ? true : false}
                            />
                            <Form.Check
                                inline
                                label="Dừng hoạt động"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                                value="inactive"
                                checked={customer.status === "inactive" ? true : false}
                            />
                        </div>
                    ))}
                    <Form.Group className='admindetailaccount__wrapperbtn'>
                        <Button variant="primary" type="submit">Cập nhật</Button>
                    </Form.Group>
                </Form>
            </Container>
        </>
    )
}

export default UpdateCustomer