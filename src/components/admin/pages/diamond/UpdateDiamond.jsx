import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Input, Radio } from 'antd';
import { Editor } from '@tinymce/tinymce-react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateDiamond = (req, res) => {
    const { id } = useParams();
    const [defaultValue, setDefaultValue] = useState([]);
    const [diamond, setDiamond] = useState({});
    const [thumbnail, setThumbnail] = useState();
    const [columns, setColumns] = useState([]);
    const [preview, setPreview] = useState("");
    
    //A
    useEffect(() => {
        console.log(id);
        axios.get("/admin/diamond/edit/" + id)
            .then(function (response) {
                setDiamond(response.data.record);
                setColumns(response.data.record);
                setPreview(response.data.record.thumbnail);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    // Chọn ảnh
    const handleImageChange = (e) => {
        setThumbnail({...diamond, thumbnail : e.target.files[0]});
        setPreview(URL.createObjectURL(e.target.files[0]));
    }
    // Gửi form submit update
    const updateDiamond = (e) => {
        e.preventDefault();
        axios.patch("/admin/diamond/edit/" + id, diamond, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then((result) => {
                const checkResult = result.data;
                console.log(checkResult)
                if (checkResult.code === 200) {
                    toast.success('Cập nhật thành công');
                } else if (checkResult.code === 400) {
                    toast.error('Cập nhật không thành công');
                } else if (checkResult.code === 401) {
                    toast.error('Cập nhật không thành công');
                }

            })
            .catch(error => {
                toast.error('Cập nhật không thành công');
                console.log(error);
            });
    }

    return (
        <>
            <ToastContainer />
            <Container style={{marginTop: '20px'}}>
                <h1>Chỉnh sửa sản phẩm</h1>
                <Form onSubmit={updateDiamond} enctype='multipart/form-data'>
                    <Form.Group className="mb-3" style={{ width: '100%' }}>
                        <Form.Label>Tiêu đề</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            value={diamond.title || ''}
                            onChange={(e) => setDiamond({ ...diamond, title: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" style={{ width: '100%' }}>
                        <Form.Label>Giá</Form.Label>
                        <Form.Control
                            type="number"
                            name="price"
                            value={diamond.price || ''}
                            onChange={(e) => setDiamond({ ...diamond, price: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" style={{ width: '100%' }}>
                        <Form.Label>Nước</Form.Label>
                        <Form.Control
                            type="number"
                            name="color"
                            value={diamond.color || ''}
                            onChange={(e) => setDiamond({ ...diamond, color: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" style={{ width: '100%' }}>
                        <Form.Label>Độ tinh khiết</Form.Label>
                        <Form.Control
                            type="number"
                            name="clarity"
                            value={diamond.clarity || ''}
                            onChange={(e) => setDiamond({ ...diamond, clarity: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" style={{ width: '100%' }}>
                        <Form.Label>Giác cắt</Form.Label>
                        <Form.Control
                            type="number"
                            name="cut"
                            value={diamond.cut || ''}
                            onChange={(e) => setDiamond({ ...diamond, cut: e.target.value })}
                        />
                    </Form.Group>
                    <div className='mt-3 mb-3 ml-2 mr-2'>Mô tả</div>
                    <Editor
                        initialValue={diamond.description}
                        onEditorChange={(content) => setDiamond({ ...diamond, description: content })}
                        apiKey='7kewhhnqfkgy1b51ajibp6aquu8pbcuqgaw64fatnixmljhf'
                    />
                    <div className='mt-2 mb-4'>
                        <div className="App">
                            <div className='mb-2'>Ảnh</div>
                            <input
                                name="thumbnail"
                                accept="image/*"
                                type="file"
                                onChange={handleImageChange}
                            />
                            <div style={{ marginTop: "5px" }}>
                                {preview && <img style={{ width: "100px", height: "auto" }} src={preview} />}
                            </div>
                        </div>
                    </div>
                    <Radio.Group className="mb-3" onChange={(e) => setDiamond({ ...diamond, status: e.target.value })} value={diamond.status}>
                        <Radio value="active">Hoạt động</Radio>
                        <Radio value="inactive">Dừng hoạt động</Radio>
                    </Radio.Group>
                    <Form.Group className='admindetailproduct__wrapperbtn'>
                        <Button style={{ marginBottom: "20px" }} variant="primary" type="submit">Cập nhật</Button>
                    </Form.Group>
                </Form>
            </Container>
        </>
    );
}

export default UpdateDiamond;
