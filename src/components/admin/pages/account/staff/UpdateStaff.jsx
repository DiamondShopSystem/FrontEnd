import React, { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateStaff = () => {
    const { id } = useParams();
    const [staff, setStaff] = useState({});
    const [columns, setColumns] = useState({});
    const [avatar, setAvatar] = useState();
    const [preview, setPreview] = useState("");


    useEffect(() => {
        axios.get("/admin/account/staff/edit/" + id)
            .then(function (response) {
                setStaff(response.data.record);
                setColumns(response.data.record);
                setPreview(response.data.record.avatar);
            })
            .catch(error => {
                console.error('Error fetching staff account:', error);
            });
    }, [id]);
    const handleImageChange = (e) => {
        setAvatar({...staff, avatar : e.target.files[0]});
        setPreview(URL.createObjectURL(e.target.files[0]));
    }
    const updateStaff = async (e) => {
        e.preventDefault();
        axios.patch("/admin/account/staff/edit/" + id, staff)
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
                <h1>Chỉnh sửa tài khoản nhân viên</h1>
                <Form onSubmit={updateStaff} encType='multipart/form-data'>
                    <Form.Group className="mb-3" style={{ width: '100%' }}>
                        <Form.Label>Họ và tên</Form.Label>
                        <Form.Control
                            type="text"
                            name="fullName"
                            value={staff.fullName || ''}
                            onChange={(e) => setStaff({ ...staff, fullName: e.target.value })}
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
                    
                    <div className='mt-2 mb-4'>
                        <div className="App">
                            <div className='mb-2'>Ảnh đại diện</div>
                            <input
                                name="avatar"
                                accept="image/*"
                                type="file"
                                onChange={handleImageChange}
                            />
                           <div style={{ marginTop: "5px" }}>
                                {preview && <img style={{ width: "100px", height: "auto" }} src={preview} />}
                            </div>
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

export default UpdateStaff;
