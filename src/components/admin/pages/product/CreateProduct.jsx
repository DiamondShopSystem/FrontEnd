import React, { useEffect, useState } from 'react';
import '../../styles/Category.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Form, Input, Radio } from 'antd';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Controller, useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/Product.css';
import { UploadOutlined } from '@ant-design/icons';
import { Button as ButtonAnt, message, Upload } from 'antd';
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
const CreateProduct = () => {
    const {
        reset,
    } = useForm()
    const [thumnail, setThumnail] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setThumnail(URL.createObjectURL(e.target.files[0]));
    }
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
    // React.useEffect(() => {
    //     fetchData()
    // }, [])
    // const onChange = (newValue) => {
    //     setParentCategory(newValue);
    // };
    const onPopupScroll = (e) => {
        console.log('onPopupScroll', e);
    };

    // const fetchData = () => {
    //     axios.get('/admin/category/create')
    //         .then(function (response) {

    //             setCategory(response.data.records);
    //             const data = category.map(item => {
    //                 const { title: label, ...rest } = item;
    //                 return { label, ...rest }
    //             }
    //             );
    //             console.log(data);
    //             setColumns(data);

    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         })

    // }

    //Hàm submit gửi form tạo mới sản phẩm
    const addProduct = async (e) => {
        const configuration = {
            method: "post",
            url: "admin/product/create",
            data: {
                title,
                status,
                description,
                price,
                size,
                thumnail
                // parent_id
            },
        };
        await axios(configuration)
            .then((result) => {
                console.log(result);
                const checkResult = result.data;
                console.log(checkResult);
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
                <Form onFinish={addProduct} size='large' layout='vertical' labelCol={{ span: 4 }}>
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
                        <Input type='number' onChange={(e) => setSize(e.target.value)} value={price} />
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
                            <input name="thumnail"
                                accept="image/*" type="file" onChange={handleChange} />
                            <img src={thumnail} />
                        </div>
                        {/* <Upload previewFile {...props}>
                            <ButtonAnt  icon={<UploadOutlined />}>Click to Upload</ButtonAnt>
                        </Upload> */}
                    </div>
                    <Radio.Group onChange={onChangeStatus} value={status}>
                        <Radio value={"active"}>Hoạt động</Radio>
                        <Radio value={"inactive"}>Dừng hoạt động</Radio>
                    </Radio.Group>
                    <Form.Item className='admincreateproduct__wrapperbtn' >
                        <Button variant="primary" type='submit'>Tạo mới</Button>
                    </Form.Item>
                </Form>
            </Container>
        </>
    )
}

export default CreateProduct