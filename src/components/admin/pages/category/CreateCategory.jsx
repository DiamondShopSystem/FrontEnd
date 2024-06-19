import React, { useEffect, useState } from 'react';
import '../../styles/Category.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Form, Input, Radio } from 'antd';
import { Editor } from '@tinymce/tinymce-react';
import { TreeSelect, message, Upload } from 'antd';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Controller, useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UploadOutlined } from '@ant-design/icons';
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
const CreateCategory = () => {

    const [parent_id, setParentCategory] = useState("");
    const [category, setCategory] = useState([]);
    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("active");

    React.useEffect(() => {
        fetchData()
    }, [])
    const onChange = (newValue) => {
        setParentCategory(newValue);
    };
    const onPopupScroll = (e) => {
        console.log('onPopupScroll', e);
    };
    const fetchData = () => {
        axios.get('/admin/category/create')
            .then(function (response) {

                setCategory(response.data.records);
                const data = category.map(item => {
                    const { title: label, ...rest } = item;
                    return { label, ...rest }
                }
                );

            })
            .catch(function (error) {
                console.log(error);
            })

    }
    const {
        reset,
    } = useForm()

    const onChangeStatus = (e) => {
        console.log('radio checked', e.target.value);
        setStatus(e.target.value);
    };

    //Hàm submit gửi form tạo mới danh mục
    const addCategory = async (e) => {
        const configuration = {
            method: "post",
            url: "admin/category/create",
            data: {
                title,
                status,
                description,
                parent_id
            },
        };
        await axios(configuration)
            .then((result) => {
                console.log(result);
                const checkResult = result.data;
                console.log(checkResult);
                reset();
                fetchData()
                toast.success('Thêm mới thành công')
            })
            .catch((error) => { console.log(error); toast.error('Thêm mới không thành công') })
    }
    return (
        <>
            <ToastContainer />
            <Container className='admincreatecategory__container'>
                <h1>Tạo mới danh mục</h1>
                <Form onFinish={addCategory} size='large' layout='vertical' labelCol={{ span: 4 }}>
                    <Form.Item name='title' label="Tiêu đề" style={{ width: '100%' }}>
                        <Input type='text' onChange={(e) => setTitle(e.target.value)} value={title} />
                    </Form.Item>
                    <TreeSelect
                        showSearch
                        style={{
                            width: '100%',
                        }}
                        // value={parent_id}
                        dropdownStyle={{
                            maxHeight: 400,
                            overflow: 'auto',
                        }}
                        placeholder={"Chọn danh mục cha"}
                        allowClear
                        treeDefaultExpandAll
                        fieldNames={{ label: "title", value: '_id', children: "children" }}
                        onChange={onChange}
                        treeData={category}
                        onPopupScroll={onPopupScroll}
                    />
                    <Form.Item name='description' label="Mô tả" style={{ width: '100%' }}>
                        <Editor
                            onEditorChange={(value, editor) => {
                                setDescription(editor.getContent({ format: 'text' }));

                            }}
                            apiKey='7kewhhnqfkgy1b51ajibp6aquu8pbcuqgaw64fatnixmljhf'
                        />
                    </Form.Item>
                    <Radio.Group onChange={onChangeStatus} value={status}>
                        <Radio value={"active"}>Hoạt động</Radio>
                        <Radio value={"inactive"}>Dừng hoạt động</Radio>
                    </Radio.Group>
                    <Form.Item className='admincreatecategory__wrapperbtn' >
                        <Button style={{marginBottom:"20px"}} variant="primary" type='submit'>Tạo mới</Button>
                    </Form.Item>
                </Form>
            </Container>
        </>

    )
}

export default CreateCategory