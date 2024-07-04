import React, { useEffect, useState } from 'react'
import '../../styles/Category.css';
import { Container } from 'react-bootstrap';
import { Editor } from '@tinymce/tinymce-react';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import { TreeSelect } from 'antd';
import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateCategory = (req, res) => {

    const [defaultValue, setDefaultValue] = useState([]);
    const [category, setCategory] = useState([]);
    const [columns, setColumns] = useState([]);
    const { id } = useParams();
    const onChange = (newValue) => {
        setCategory({ ...category, parent_id: newValue });
    };
    const onPopupScroll = (e) => {
        console.log('onPopupScroll', e);
    };
    useEffect(() => {
        axios.get("/admin/category/edit/" + id)
            .then(function (response) {
                setCategory(response.data.record);
                setColumns(response.data.records);
                setDefaultValue(response.data.category.parent_id)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    const updateCategory = (e) => {
        e.preventDefault();
        axios.patch("/admin/category/edit/" + id, category)
            .then((result) => {
                const checkResult = result.data;
                if (checkResult.code === 200) {
                    toast.success('Cập nhật thành công');
                } else if (checkResult.code === 400) {
                    toast.error('Cập nhật không thành công');
                } else if (checkResult.code === 401) {
                    toast.error('Cập nhật không thành công');
                }
            })
            .catch((error) => { console.log(error); toast.error('Cập nhật không thành công') })
    }


    return (
        <>
            <ToastContainer />
            <Container className='admindetailcategory__container'>
                <h1>Chỉnh sửa danh mục</h1>
                <Form onSubmit={updateCategory} enctype='multipart/form-data'>
                    <Form.Group className="mb-3" style={{ width: '100%' }} >
                        <Form.Label>Tiêu đề</Form.Label>
                        <Form.Control type="text" value={category.title} onChange={(e) => setCategory({ ...category, title: e.target.value })} />
                    </Form.Group>
                    <TreeSelect
                        showSearch
                        style={{
                            width: '100%',
                        }}
                        value={category.parent_id}
                        dropdownStyle={{
                            maxHeight: 400,
                            overflow: 'auto',
                        }}
                        placeholder="Chọn danh mục cha"
                        allowClear
                        treeDefaultExpandAll
                        fieldNames={{ label: "title", value: '_id', children: "children" }}
                        onChange={onChange}
                        treeData={columns}
                        onPopupScroll={onPopupScroll}
                    />
                    <div className='mt-3 mb-3 ml-2 mr-2'>Mô tả</div>
                    <Editor
                        onEditorChange={(value, editor) => {
                            setCategory({ ...category, description: editor.getContent({ format: 'text' }) });
                        }}
                        value={category.description}
                        apiKey='7kewhhnqfkgy1b51ajibp6aquu8pbcuqgaw64fatnixmljhf'
                    />
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3" onChange={(e) => setCategory({ ...category, status: e.target.value })} >
                            <Form.Check
                                inline
                                label="Hoạt động"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                                value="active"
                                checked={category.status === "active" ? true : false}
                            />
                            <Form.Check
                                inline
                                label="Dừng hoạt động"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                                value="inactive"
                                checked={category.status === "inactive" ? true : false}
                            />
                        </div>
                    ))}
                    <Button variant="primary" type='submit'>Cập nhật</Button>
                </Form>
            </Container >
        </>
    );
}

export default UpdateCategory