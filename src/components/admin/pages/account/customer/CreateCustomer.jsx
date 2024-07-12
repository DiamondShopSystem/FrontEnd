import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Form, Input, Radio, Select } from 'antd';
import {  message  } from 'antd';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const props = {
    name: 'file',
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

const CreateCustomer = () => {
    const navigate = useNavigate(); // Hook useNavigate
    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState("");
    const [stt, setStt] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [status, setStatus] = useState("active");

    const { reset, setValue } = useForm();

    const onChangeStatus = (e) => {
        console.log('radio checked', e.target.value);
        setStatus(e.target.value);
    };

    const handleAvatarUpload = (info) => {
        if (info.file.status === 'done') {
            setAvatar(info.file.response.url);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    };

    const addStaffAccount = async (values) => {
        const configuration = {
            method: "post",
            url: "admin/account/customer/create",
            data: {
                name: values.name,
                avatar,
                stt: values.stt,
                email: values.email,
                role: values.role,
                status,
            },
        };

        await axios(configuration)
            .then((result) => {
                console.log(result);
                const checkResult = result.data;
                console.log(checkResult);
                reset();
                navigate('/admin/account/customer', { state: { success: true } });

            })
            .catch((error) => {
                console.log(error);
                toast.error('Thêm mới không thành công');
            });
    };

    return (
        <>
            <ToastContainer />
            <Container className='admincreateaccount__container'>
                <h1>Tạo mới tài khoản nhân viên</h1>
                <Form onFinish={addStaffAccount} size='large' layout='vertical' labelCol={{ span: 4 }}>
                    <Form.Item name='name' label="Tên" style={{ width: '100%' }}>
                        <Input type='text' onChange={(e) => setName(e.target.value)} value={name}/>
                    </Form.Item>
                    <div className='mt-2 mb-4'>
                        <div className="App">
                            <div className='mb-2'>Ảnh</div>
                            <input name="thumbnail"
                                accept="image/*" type="file" />
                            <div style={{ marginTop: "5px" }}>
                                <img style={{ width: "100px", height: "auto" }} src={avatar} />
                            </div>
                        </div>
                    </div>
                    <Form.Item name='stt' label="STT" style={{ width: '100%' }}>
                        <Input type='text' onChange={(e) => setStt(e.target.value)} value={stt}/>
                    </Form.Item>
                    <Form.Item name='email' label="Email" style={{ width: '100%' }}>
                        <Input type='email' onChange={(e) => setEmail(e.target.value)} value={email}/>
                    </Form.Item>
                    <Form.Item name='role' label="Vai trò" style={{ width: '100%' }}>
                        <Select
                            onChange={(value) => setRole(value)}
                            placeholder="Chọn vai trò"
                            options={[
                                { value: 'admin', label: 'Admin' },
                                { value: 'editor', label: 'Editor' },
                                { value: 'viewer', label: 'Viewer' }
                            ]}
                        />
                    </Form.Item>
                    <Radio.Group onChange={onChangeStatus} value={status}>
                        <Radio value={"active"}>Hoạt động</Radio>
                        <Radio value={"inactive"}>Dừng hoạt động</Radio>
                    </Radio.Group>
                    <Form.Item className='admincreateaccount__wrapperbtn'>
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

export default CreateCustomer;
