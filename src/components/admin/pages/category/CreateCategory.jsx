import React, { useEffect, useState } from 'react';
import '../../styles/Category.css';
import { Container} from 'react-bootstrap';
import { Form, Input, Radio } from 'antd';
import { Editor } from '@tinymce/tinymce-react';
import { TreeSelect, message } from 'antd';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom v6


const CreateCategory = () => {
    const navigate = useNavigate(); // Hook useNavigate
    const [parent_id, setParentCategory] = useState("");
    const [category, setCategory] = useState([]);
    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("active");

    useEffect(() => {
        fetchData();
    }, []);

    const { reset, setValue } = useForm();

    // Set danh mục cha
    const onSetParentCategory = (newValue) => {
        setParentCategory(newValue);
    };

    const onPopupScroll = (e) => {
        console.log('onPopupScroll', e);
    };

    const fetchData = () => {
        axios.get('/admin/category/create')
            .then(function (response) {
                setCategory(response.data.records);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const onChangeStatus = (e) => {
        console.log('radio checked', e.target.value);
        setStatus(e.target.value);
    };

    // Hàm submit gửi form tạo mới danh mục
    const addCategory = async (values) => {
        const configuration = {
            method: "post",
            url: "admin/category/create",
            data: {
                title: values.title,
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
                fetchData();
                navigate('/admin/category', { state: { success: true } });

            })
            .catch((error) => {
                console.log(error);
                toast.error('Thêm mới không thành công');
            });
    };

    return (
        <>
            <ToastContainer />
            <Container className='admincreatecategory__container'>
                <h1>Tạo mới danh mục</h1>
                <Form onFinish={addCategory} size='large' layout='vertical' labelCol={{ span: 4 }}>
                    <Form.Item name='title' label="Tiêu đề" style={{ width: '100%' }}>
                        <Input type='text' onChange={(e) => setTitle(e.target.value)} value={title}/>
                    </Form.Item>
                    <TreeSelect
                        showSearch
                        style={{ width: '100%' }}
                        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                        placeholder={"Chọn danh mục cha"}
                        allowClear
                        treeDefaultExpandAll
                        fieldNames={{ label: "title", value: '_id', children: "children" }}
                        onChange={onSetParentCategory}
                        treeData={category}
                        onPopupScroll={onPopupScroll}
                    />
                    <Form.Item name='description' label="Mô tả" style={{ width: '100%' }}>
                        <Editor
                            onEditorChange={(value, editor) => setDescription(editor.getContent({ format: 'text' }))}
                            apiKey='7kewhhnqfkgy1b51ajibp6aquu8pbcuqgaw64fatnixmljhf'
                        />
                    </Form.Item>
                    <Radio.Group onChange={onChangeStatus} value={status}>
                        <Radio value={"active"}>Hoạt động</Radio>
                        <Radio value={"inactive"}>Dừng hoạt động</Radio>
                    </Radio.Group>
                    <Form.Item className='admincreatecategory__wrapperbtn'>
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

export default CreateCategory;
