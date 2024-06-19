import React, { useEffect, useState } from 'react';
import '../../styles/Category.css';
import { Container } from 'react-bootstrap';
import { Form, Input, Radio } from 'antd';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/Product.css';


const CreateProduct = () => {

    const {
        reset,
    } = useForm();

    const [thumbnail, setThumbnail] = useState("");
    // function handleImageChange(e) {
    //     const formData = new FormData();
    //     console.log(e.target.files);
    //     setThumbnail(URL.createObjectURL(e.target.files[0]));

    // }
    const [uploadedImage, setUploadedImage] = useState("");
    const [size, setSize] = useState("");
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("active");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(1);
    const [stock, setStock] = useState(1);
    const onChangeStatus = (e) => {
        console.log('radio checked', e.target.value);
        setStatus(e.target.value);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        console.log(file);
        transformFile(file);
    }
    const transformFile = (file) => {
        const reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setThumbnail(reader.result);
                console.log(thumbnail);
            }
        } else {
            setThumbnail("");
        }
    }


    //Hàm submit gửi form tạo mới sản phẩm
    const addProduct = async (e) => {

        console.log(thumbnail)
        const configuration = {
            method: "post",
            url: "admin/product/create",
            // headers: { "Content-Type": "multipart/form-data" },
            data: {
                title,
                status,
                description,
                price,
                size,
                thumbnail

                // parent_id
            },
        };
        await axios(configuration)
            .then((result) => {
                reset();
                // fetchData()
                toast.success('Thêm mới thành công')
            })
            .catch((error) => { console.log(error); toast.error('Thêm mới không thành công') })
    }
    return (
        <>
            <ToastContainer />
            <Container className='admincreateproduct__container'>
                <h1>Tạo mới sản phẩm</h1>
                <Form onFinish={addProduct} size='large' layout='vertical' labelCol={{ span: 4 }} enctype="multipart/form-data" >
                    {/* <Radio.Group onChange={onChangeStatus} value={status}>
                        <Radio value={"active"}>Nổi bật</Radio>
                        <Radio value={"inactive"}>Không</Radio>
                    </Radio.Group> */}

                    <Form.Item name='title' label="Tiêu đề" style={{ width: '100%' }}>
                        <Input type='text' onChange={(e) => setTitle(e.target.value)} value={title} />
                    </Form.Item>
                    <Form.Item name='price' label="Giá" style={{ width: '100%' }}>
                        <Input type='number' onChange={(e) => setPrice(e.target.value)} value={price} />
                    </Form.Item>
                    <Form.Item name='size' label="Kích cỡ" style={{ width: '100%' }}>
                        <Input type='number' onChange={(e) => setSize(e.target.value)} value={size} />
                    </Form.Item>
                    {/* <TreeSelect
                        showSearch
                        style={{
                            width: '100%',
                        }}
                        value={parent_id}
                        dropdownStyle={{
                            maxHeight: 400,
                            overflow: 'auto',
                        }}
                        placeholder="Chọn danh mục"
                        allowClear
                        treeDefaultExpandAll
                        fieldNames={{ label: "title", value: '_id', children: "children" }}
                        onChange={onChange}
                        treeData={category}
                        onPopupScroll={onPopupScroll}
                    /> */}
                    <Form.Item name='description' label="Mô tả" style={{ width: '100%' }}>
                        <Editor
                            onEditorChange={(value, editor) => {
                                setDescription(editor.getContent({ format: 'text' }));

                            }}
                            apiKey='7kewhhnqfkgy1b51ajibp6aquu8pbcuqgaw64fatnixmljhf'
                        />
                    </Form.Item>
                    <div className='mt-2 mb-4'>
                        <div className="App">
                            <div className='mb-2'>Ảnh</div>
                            <input name="thumbnail"
                                accept="image/*" type="file" onChange={handleImageChange} />
                            <div style={{ marginTop: "5px" }}>
                                <img style={{ width: "100px", height: "auto" }} src={thumbnail} />
                            </div>

                        </div>
                    </div>


                    <Radio.Group onChange={onChangeStatus} value={status}>
                        <Radio value={"active"}>Hoạt động</Radio>
                        <Radio value={"inactive"}>Dừng hoạt động</Radio>
                    </Radio.Group>
                    <Form.Item className='admincreateproduct__wrapperbtn' >
                        <Button style={{ marginBottom: '20px' }} variant="primary" type='submit'>Tạo mới</Button>
                    </Form.Item>
                </Form>
            </Container>
        </>
    )
}

export default CreateProduct;