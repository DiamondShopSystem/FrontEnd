import React, { useEffect, useState } from 'react';
import '../../styles/Product.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Input, Radio } from 'antd';
import { Editor } from '@tinymce/tinymce-react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateProduct = (req, res) => {
    const [defaultValue, setDefaultValue] = useState([]);
    const [product, setProduct] = useState({});
    const [thumbnail, setThumbnail] = useState("");
    const [columns, setColumns] = useState([]);
    const { id } = useParams();
    const onChange = (newValue) => {
        setProduct({ ...product, parent_id: newValue });
    };

    const handleChange = (e) => {
        setThumbnail(URL.createObjectURL(e.target.files[0]));
    }
    const onPopupScroll = (e) => {
        console.log('onPopupScroll', e);
    };

    useEffect(() => {
        console.log(id);
        axios.get("/admin/product/edit/" + id)
            .then(function (response) {
                setProduct(response.data.product);
                setColumns(response.data.records);
                setDefaultValue(response.data.product.parent_id)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    const updateProduct = (e) => {
        e.preventDefault();
        axios.patch("/admin/category/edit/" + id, product)
            .then((result) => {
                console.log(result);
                const checkResult = result.data;
                console.log(checkResult)
                toast.success('Cập nhật thành công');
            })
            .catch(error => {
                toast.error('Cập nhật không thành công');
                console.log(error);
            });
    }

    const onEditorChange = (content) => {
        setProduct({ ...product, description: content });
    }

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    }

    const onRadioChange = (e) => {
        setProduct({ ...product, status: e.target.value });
    }

    return (
        <>
            <ToastContainer />
            <Container className='admindetailproduct__container'>
                <h1>Chỉnh sửa sản phẩm</h1>
                <Form onSubmit={updateProduct}>
                    <Form.Group className="mb-3" style={{ width: '100%' }}>
                        <Form.Label>Tiêu đề</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            value={product.title || ''}
                            onChange={(e) => setProduct({ ...product, title: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" style={{ width: '100%' }}>
                        <Form.Label>Giá</Form.Label>
                        <Form.Control
                            type="number"
                            name="price"
                            value={product.price || ''}
                            onChange={(e) => setProduct({ ...product, price: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" style={{ width: '100%' }}>
                        <Form.Label>Kích cỡ</Form.Label>
                        <Form.Control
                            type="number"
                            name="size"
                            value={product.size || ''}
                            onChange={(e) => setProduct({ ...product, size: e.target.value })}
                        />
                    </Form.Group>
                    <div className='mt-3 mb-3 ml-2 mr-2'>Mô tả</div>
                    <Editor
                        initialValue={product.description}
                        onEditorChange={(content) => setProduct({ ...product, description: content })}
                        apiKey='7kewhhnqfkgy1b51ajibp6aquu8pbcuqgaw64fatnixmljhf'
                    />
                    <div className='mt-2 mb-4'>
                        <div className="App">
                            <div className='mb-2'>Ảnh</div>
                            <input
                                name="thumbnail"
                                accept="image/*"
                                type="file"
                                onChange={handleChange}
                            />
                            {thumbnail && <img src={thumbnail} alt="thumbnail" />}
                        </div>
                    </div>
                    <Radio.Group onChange={(e) => setProduct({ ...product, status: e.target.value })} value={product.status}>
                        <Radio value="active">Hoạt động</Radio>
                        <Radio value="inactive">Dừng hoạt động</Radio>
                    </Radio.Group>
                    <Form.Group className='admindetailproduct__wrapperbtn'>
                        <Button variant="primary" type="submit">Cập nhật</Button>
                    </Form.Group>
                </Form>
            </Container>
        </>
    );
}

export default UpdateProduct;
