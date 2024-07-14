import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Form, Input, Radio } from 'antd';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';



const CreateStaff = () => {
    const {
        reset,
    } = useForm();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [avatar, setAvatar] = useState("");
    const [preview, setPreview] = useState("");
    const [role, setRole] = useState("");
    const [status, setStatus] = useState("active");


    // Chọn trạng thái hoạt động
    const onChangeStatus = (e) => {
        console.log('radio checked', e.target.value);
        setStatus(e.target.value);
    };
    // Chọn ảnh
    const onChangeImage = (e) => {
        console.log(e.target.files);
        setAvatar(e.target.files[0]);
        setPreview(URL.createObjectURL(e.target.files[0]));
    }

    const addAccountStaff = async (values) => {
        const configuration = {
            method: "post",
            url: "admin/account/staff/create",
            headers: { "Content-Type": "multipart/form-data" },
            data: {
                email,
                password,
                fullName,
                avatar,
                status
            },
        };
        await axios(configuration)
            .then((result) => {
                reset();
                navigate('/admin/account/staff', { state: { success: true } });

            })
            .catch((error) => {
                console.log(error);
                toast.error('Thêm mới không thành công');
            });
    };

    return (
        <>
            <ToastContainer />
            <Container style={{marginTop: '20px'}}>
                <h1>Tạo mới tài khoản nhân viên</h1>
                <Form onFinish={addAccountStaff} size='large' layout='vertical' labelCol={{ span: 4 }}>
                    <Form.Item name='email' label="Email" style={{ width: '100%' }}>
                        <Input type='email' onChange={(e) => setEmail(e.target.value)} value={email} />
                    </Form.Item>
                    <Form.Item name='password' label="Mật khẩu" style={{ width: '100%' }}>
                        <Input type='password' onChange={(e) => setPassword(e.target.value)} value={password} />
                    </Form.Item>
                    <Form.Item name='fullName' label="Họ và Tên" style={{ width: '100%' }}>
                        <Input type='text' onChange={(e) => setFullName(e.target.value)} value={fullName} />
                    </Form.Item>
                    {/* <Form.Item name='role' label="Vai trò" style={{ width: '100%' }}>
                        <Select
                            onChange={(value) => setRole(value)}
                            placeholder="Chọn vai trò"
                            options={[
                                { value: 'salestaff', label: 'Nhân viên bán hàng' },
                                { value: 'deliverystaff', label: 'Nhân viên giao hàng' },
                                { value: 'manager', label: 'Quản lí' }
                            ]}
                        />
                    </Form.Item> */}
                    <div className='mt-2 mb-4'>
                        <div className="App">
                            <div className='mb-2'>Ảnh</div>
                            <input name="avatar"
                                accept="image/*" type="file" onChange={onChangeImage} />
                            <div style={{ marginTop: "5px" }}>
                                {preview && <img style={{ width: "100px", height: "auto" }} src={preview} />}
                            </div>
                        </div>
                    </div>
                    <div className="mt-2">
                        <Radio.Group onChange={onChangeStatus} value={status}>
                            <Radio value={"active"}>Hoạt động</Radio>
                            <Radio value={"inactive"}>Dừng hoạt động</Radio>
                        </Radio.Group>
                    </div>
                    <Form.Item style={{marginTop: '20px'}}>
                        <Button
                            variant="primary"
                            type='submit'
                        >Tạo mới</Button>
                    </Form.Item>
                </Form>
            </Container>
        </>
    );
};

export default CreateStaff;
