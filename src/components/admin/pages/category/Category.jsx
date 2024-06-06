import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import {Button as Buttonmui} from '@mui/material/Button';
import Button from 'react-bootstrap/Button';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space, Table, Tag, Pagination, Form } from 'antd';
import Badge from 'react-bootstrap/Badge';
import '../../styles/Category.css';
// import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const { Column, ColumnGroup } = Table;

const baseURL = process.env.BASEURL;

const columns = [

    { title: '', dataIndex: 'stt', },
    { title: 'Ảnh', dataIndex: 'thumnail', },
    { title: 'Danh mục', dataIndex: 'title', },
    {
        title: 'Trạng thái',
        dataIndex: "status",
        // key: 'action'
    },
    {
        title: '',
        dataIndex: 'action',
    }
];



const Category = () => {

    const navigate = useNavigate();
    const { Search } = Input;


    const [category, setCategory] = useState([]);


    useEffect(() => {
        axios.get('/admin/category')
            .then(function (response) {

                setCategory(response.data.record);

            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    // Chức năng tìm kiếm 
    const onSearch = () => {

    };



    // Chuyển sang trang tạo tài khoản
    const addCategory = () => {
        navigate("/admin/category/create");
    }

    const detailCategory = (id) => {
        axios.delete(`/admin/category/detail/${id}`)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            });
    }


    // Xóa danh mục
    const deleteCategory = (id) => {
        axios.delete(`/admin/category/delete/${id}`)
            .then(response => {
                console.log(response);
                alert("Xóa thành công");
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <Container className='admincategory__container'>
            <Row>
                <Col xs="4">
                    <Search placeholder="Tìm kiếm danh mục" onSearch={onSearch} enterButton size='large' />
                </Col>
                <Col xs="4"></Col>
                <Col xs="4" className='flex-end'>
                    <Button variant="success" onClick={addCategory}>Thêm mới danh mục</Button>
                </Col>
            </Row>
            <div style={{ height: 400, width: '100%', marginTop: 20 }}>
                <Table
                    pagination={false}
                    dataSource={category} >
                    <Column title="STT" dataIndex="stt" align='center' />
                    <Column title='Ảnh' dataIndex='thumnail' align='center' />
                    <Column title='Danh mục' dataIndex='title' align='center' />
                    <Column
                        align='center'
                        title='Trạng thái'
                        dataIndex='status'
                        key='status'
                        render={(key) => {
                            if (key === "active") {
                                return (
                                    <Badge style={{ width: 100.21 }} bg="success">Đang hoạt động</Badge>
                                    // <Button style={{ width: 177.76 }} variant="contained" color="success">
                                    //     Hoạt động
                                    // </Button>
                                )
                            } else if (key === "inactive") {
                                return (
                                    <Badge bg="danger">Không hoạt động</Badge>
                                    // <Button variant="contained" color="error">
                                    //     Không hoạt động
                                    // </Button>
                                )
                            }
                        }}
                    />
                    <Column
                        align='center'
                        title='Hành động'
                        dataIndex='_id'
                        key='_id'
                        render={(_id) => {
                            return (
                                <>
                                    <Button style={{ margin: 1 }} variant="secondary"><Link style={{ textDecoration: 'none', color: 'white' }} to={`/admin/category/detail/${_id}`} >Chi tiết</Link></Button>
                                    <Button style={{ margin: 1 }} variant="warning"><Link style={{ textDecoration: 'none', color: 'white' }} to={`/admin/category/edit/${_id}`} >Chỉnh sửa</Link></Button>
                                    <Button
                                        style={{ margin: 1 }}
                                        variant="danger"
                                        // color='error'
                                        type='submit'
                                        onClick={(e) => deleteCategory(_id)}
                                    >Xóa</Button>
                                </>
                            )
                        }}

                    />

                </Table>
            </div>

        </Container>
    )
}

export default Category;