import React, { useEffect, useState } from 'react'
import '../../styles/Category.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Input, Radio } from 'antd';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';


const UpdateCategory = (req, res) => {

    const [category, setCategory] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        console.log(id);
        axios.get("/admin/category/edit/" + id)
            .then(function (response) {
                setCategory(response.data.category);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    const updateCategory = (e) => {
        console.log(category)
        e.preventDefault();
        axios.patch("/admin/category/edit/" + id, category)
            // .then(res => alert("Cập nhật thành công"))
            .then((result) => {
                console.log(result);
                const checkResult = result.data;
                console.log(checkResult);
                if (checkResult.code === 200) {
                    alert(result.data.msg);
                } else {
                    alert(result.data.msg)
                }
            })
            .catch((error) => { console.log(error); })
    }


    return (
        <>
            <Container className='admindetailcategory__container'>
                <h1>Chỉnh sửa danh mục</h1>
                <Form onSubmit={updateCategory}>
                    <Form.Group   className="mb-3" style={{ width: '50%' }} >
                        <Form.Label>Tên danh mục</Form.Label>
                        <Form.Control type="text" value={category.title}  onChange={(e) => setCategory({ ...category, title: e.target.value })} />
                    </Form.Group>
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
                                label="Không hoạt động"
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