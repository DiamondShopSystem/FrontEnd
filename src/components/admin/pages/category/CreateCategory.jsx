import React, { useState } from 'react'
import '../../styles/Category.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Button, Form, Input, Radio } from 'antd';

import axios from 'axios';

const CreateCategory = () => {


    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("active");
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setStatus(e.target.value);
    };


    //Hàm submit gửi form tạo mới danh mục
    const addCategory = async (e) => {
        // e.preventDefault();
        const configuration = {
            method: "post",
            url: "admin/category/create",
            data: {
                title,
                status
            },
        };
        axios(configuration)
            .then((result) => {
                console.log(result);
                const checkResult = result.data;
                console.log(checkResult);
                if (checkResult.code === 200) {
                    alert("Tạo mới danh mục thành công");
                } else {
                    alert(result.data.msg)
                }
            })
            .catch((error) => { console.log(error); })
    }

    return (
        <>
            <Container className='admincreatecategory__container'>
                <h1>Tạo mới danh mục</h1>
                <Form onFinish={addCategory} layout='vertical' labelCol={{ span: 4 }}>
                    <Form.Item name='title' label="Tên danh mục" style={{ width: '50%' }}>
                        <Input type='text' onChange={(e) => setTitle(e.target.value)} value={title} />
                    </Form.Item>
                    <Radio.Group onChange={onChange} value={status}>
                        <Radio value={"active"}>Hoạt động</Radio>
                        <Radio value={"inactive"}>Không hoạt động</Radio>
                    </Radio.Group>
                    <Form.Item className='admincreatecategory__wrapperbtn' >
                        <Button className='admincreatecategory__btn' htmlType="submit" variant="primary" >Tạo mới</Button>
                    </Form.Item>
                </Form>
            </Container>
        </>
    )
}

export default CreateCategory