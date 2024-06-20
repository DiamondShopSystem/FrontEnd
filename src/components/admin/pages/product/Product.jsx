import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Input } from 'antd';
import Badge from 'react-bootstrap/Badge';
import axios from 'axios';
// import { useForm } from "react-hook-form";
import { useSearchParams, Link } from 'react-router-dom';

// import { Pagination } from 'antd';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from "react-router-dom";
import '../../styles/Product.css';

import Search from 'antd/es/input/Search';



const Product = () => {



    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const [searchQuery, setSearchQuery] = useState(queryParams.get("keyword"));
    const [filterStatusQuery, setfilterStatusQuery] = useState(queryParams.get("status"));

    // Mảng button filter trạng thái
    const [filterState, setFilterState] = useState([]);
    const [searchQuery, setSearchQuery] = useState(searchParams.get("keyword") || "");
    const [filterStatusQuery, setfilterStatusQuery] = useState(searchParams.get("status") || "");
    const location = useLocation();
    
    React.useEffect(() => {
        fetchData()
    }, [])
    useEffect(() => {
        if (location.state && location.state.success) {
            toast.success('Thêm mới thành công');
        }
    }, [location.state]);


    // Lấy data thông qua API
    const fetchData = () => {
        axios.get('/admin/product')
            .then(function (response) {
                setData(response.data.records);
                setFilterState(response.data.filterState);
            })
            .catch(function (error) {
                console.log(error);
            })

    }


    const fetchDataWithParams = (keyword, status) => {
        axios.get('/admin/product', { params: { keyword, status } })
            .then(function (response) {
                setData(response.data.records);
                setFilterState(response.data.filterState);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    // Chức năng tìm kiếm 
    const onSearch = (value) => {
        try {
            const params = {};
            if (value) params.keyword = value;
            if (filterStatusQuery) params.status = filterStatusQuery;
            setSearchParams(params);
            setSearchQuery(value);
            fetchDataWithParam(value, filterStatusQuery);
        } catch (error) {
            console.log(error);
        }

    };

    // Chức năng filter trạng thái
    const onFilterStatus = (e) => {
        // console.log(status);
        e.preventDefault();
        queryParams.set("status", filterStatusQuery);
        console.log(queryParams);
        navigate({ search: queryParams.toString() });
        
    }


    // Xóa danh mục
    const deleteProduct = async (id) => {
        axios.delete(`/admin/product/delete/${id}`)
            .then(response => {
                console.log(response);
                fetchData();
                toast.success('Xóa thành công')
            })
            .catch(error => {
                console.error(error);
                toast.error('Xóa không thành công');
            });
    }


    // Chuyển sang trang tạo tài khoản
    const handleFilterStatusChange = (status) => {
        const params = {};
        if (searchQuery) params.keyword = searchQuery;
        if (status) params.status = status;
        setSearchParams(params);
        setfilterStatusQuery(status);
    };

    return (
        <>
            <ToastContainer />
            <Container className='adminproduct__container'>
                <h1>Danh sách sản phẩm</h1>
                <Card className='mb-3'>
                    <Card.Header>Bộ lọc và tìm kiếm</Card.Header>
                    <Card.Body>
                        <Row>
                            <Col xs="6" >
                                {
                                    filterState.map((item) => {
                                        return <Button onClick={() => handleFilterStatusChange(item.status)} value={item.status} style={{ marginRight: "2px" }} variant="outline-success" active={item.active} button-status={item.status} >{item.name}</Button>

                                    })
                                }
                            </Col>
                            <Col xs="6">
                                {/* <form onSubmit={onSearch}>
                                    <input value={searchQuery} placeholder='Nhập từ khóa' onChange={(e) => setSearchQuery(e.target.value)} />
                                </form> */}
                                <Search
                                    placeholder="Nhập từ khóa"
                                    onChange={(event) => setSearchQuery(event.target.value)}
                                    value={searchQuery}
                                    size='large'
                                    enterButton
                                    onSearch={onSearch}
                                />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card >
                    <Card.Header>Danh sách</Card.Header>
                    <Card.Body>
                        <Row>
                            <Col xs="6">
                            </Col>
                            <Col style={{ textAlign: "right" }} xs="6">
                                <Link to={"create"}><Button variant="success">Thêm mới</Button></Link>
                            </Col>
                        </Row>
                        <table className='table table-hover table-sm centered-table'>
                            <thead>
                                <tr>
                                    <th>
                                        STT
                                    </th>
                                    <th>
                                        Hình ảnh
                                    </th>
                                    <th>
                                        Tiêu đề
                                    </th>
                                    <th>
                                        Trạng thái
                                    </th>
                                    <th>
                                        Hành động
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => {
                                    return (
                                        <tr>
                                            <td>
                                                {index + 1}
                                            </td>
                                            <td>

                                                {item.thumbnail === "" ? <div></div> : <img style={{ width: '100px', height: 'auto' }} alt='thumnail' src={item.thumbnail} />}

                                            </td>
                                            <td>
                                                {item.title}
                                            </td>
                                            <td>
                                                {item.status === "active" ? <Badge style={{ width: 100.21 }} bg="success">Hoạt động</Badge> : <Badge bg="danger">Dừng hoạt động</Badge>}
                                            </td>
                                            <td>
                                                <Button style={{ margin: 1 }} variant="secondary"><Link style={{ textDecoration: 'none', color: 'white' }} to={`/admin/product/detail/${item._id}`} >Chi tiết</Link></Button>
                                                <Button
                                                    style={{ margin: 1 }} 
                                                    variant="warning">
                                                        <Link style={{ textDecoration: 'none', color: 'white' }} to={`/admin/product/edit/${item._id}`} >Chỉnh sửa</Link></Button>
                                                <Button
                                                    style={{ margin: 1 }}
                                                    variant="danger"
                                                    // color='error'
                                                    type='submit'
                                                    onClick={(e) => deleteProduct(item._id)}
                                                >
                                                    Xóa
                                                </Button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default Product;