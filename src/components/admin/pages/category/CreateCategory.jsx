import React from 'react'
import '../../styles/Category.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Button, Form, Input, Radio } from 'antd';

const CreateCategory = () => {
    return (
        <>
            <Container className='admincreatecategory__container'>
                <h1>Tạo mới danh mục</h1>
                <Form  layout='vertical' labelCol={{span: 4}}>
                    <Form.Item label="Tên danh mục" style={{width:'60%'}}>
                        <Input />
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary">Submit</Button>
                    </Form.Item>
                </Form>
            </Container>
        </>
    )
}

export default CreateCategory