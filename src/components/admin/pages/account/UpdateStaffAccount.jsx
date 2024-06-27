import React, { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Radio } from 'antd';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/Product.css';

const UpdateStaffAccount = () => {
    const { id } = useParams();
    const [staff, setStaff] = useState({});
    const [avatar, setAvatar] = useState("");
    const [columns, setColumns] = useState([]);
    const [thumbnail, setThumbnail] = useState("");

    const handleChange = (e) => {
        if (e.target.name === 'avatar') {
            setThumbnail(URL.createObjectURL(e.target.files[0]));
            setAvatar(e.target.files[0]);
        } else {
            setStaff({ ...staff, [e.target.name]: e.target.value });
        }
    };

    useEffect(() => {
        axios.get("/admin/account/edit/" + id)
            .then(function (response) {
                setStaff(response.data.records);
                setColumns(response.data.records);
            })
            .catch(error => {
                console.error('Error fetching staff account:', error);
            });
    }, [id]);

    const updateStaff = async (e) => {
        e.preventDefault();
        axios.patch("/admin/account/edit/" + id, staff)
            // .then(res => alert("Cập nhật thành công"))
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
            <Container className='admindetailaccount__container'>
                <h1>Chỉnh sửa tài khoản nhân viên</h1>
                <Form onSubmit={updateStaff} encType='multipart/form-data'>
                    <Form.Group className="mb-3" style={{ width: '100%' }}>
                        <Form.Label>Họ và tên</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={staff.name || ''}
                            onChange={(e) => setStaff({ ...staff, name: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" style={{ width: '100%' }}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={staff.email || ''}
                            onChange={(e) => setStaff({ ...staff, email: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" style={{ width: '100%' }}>
                        <Form.Label>Vai trò</Form.Label>
                        <Form.Control
                            type="text"
                            name="role"
                            value={staff.role || ''}
                            onChange={(e) => setStaff({ ...staff, role: e.target.value })}
                        />
                    </Form.Group>
                    {/* <div className='mt-3 mb-3 ml-2 mr-2'>Thông tin chi tiết</div>
                    <Editor
                        initialValue={staff.description}
                        onEditorChange={(content) => setStaff({ ...staff, description: content })}
                        apiKey='your_api_key_here'
                    /> */}
                    <div className='mt-2 mb-4'>
                        <div className="App">
                            <div className='mb-2'>Ảnh đại diện</div>
                            <input
                                name="avatar"
                                accept="image/*"
                                type="file"
                                onChange={(e) => setStaff({ ...staff, avatar: e.target.value })}
                            />
                            {thumbnail && <img src={thumbnail} alt="avatar" />}
                        </div>
                    </div>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3" onChange={(e) => setStaff({ ...staff, status: e.target.value })} >
                            <Form.Check
                                inline
                                label="Hoạt động"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                                value="active"
                                checked={staff.status === "active" ? true : false}
                            />
                            <Form.Check
                                inline
                                label="Dừng hoạt động"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                                value="inactive"
                                checked={staff.status === "inactive" ? true : false}
                            />
                        </div>
                    ))}
                    <Form.Group className='admindetailaccount__wrapperbtn'>
                        <Button variant="primary" type="submit">Cập nhật</Button>
                    </Form.Group>
                </Form>
            </Container>
        </>
    );
};

export default UpdateStaffAccount;
