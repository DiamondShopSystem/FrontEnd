import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Input } from 'antd';
import Badge from 'react-bootstrap/Badge';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useSearchParams, Link } from 'react-router-dom';
<<<<<<< Updated upstream
=======
import { Pagination } from 'antd';
>>>>>>> Stashed changes
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/Product.css';



const Product = () => {
    const { Search } = Input;
    const [searchParams, setSearchParams] = useSearchParams();
    const {
        reset,
    } = useForm()
    const [product, setProduct] = useState([]);
    const [filterState, setFilterState] = useState([]);
    const [searchQuery, setSearchQuery] = useState(searchParams.get("keyword") || "");
    const [filterStatusQuery, setfilterStatusQuery] = useState(searchParams.get("status") || "");
    React.useEffect(() => {
        fetchData()
    }, [filterStatusQuery])

    // Lấy data thông qua API
    const fetchData = () => {
        axios.get('/admin/product', { params: { keyword: searchQuery, status: filterStatusQuery } })
            .then(function (response) {
                setProduct(response.data.records);
                setFilterState(response.data.filterState);

            })
            .catch(function (error) {
                console.log(error);
            })

    }

    // Chức năng tìm kiếm 
    const onSearch = () => {
        try {
            fetchData();
        } catch (error) {
            console.log(error);
        }
    };

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
                                        return <Button onClick={(event) => setfilterStatusQuery(item.status)} value={item.status} style={{ marginRight: "2px" }} variant="outline-success" active={item.active} button-status={item.status} >{item.name}</Button>
                                    })
                                }
                            </Col>
                            <Col xs="6">
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
                        <table className='table table-hover table-sm'>
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
                                {product.map((item, index) => {
                                    return (
                                        <tr>
                                            <td>
                                                {index + 1}
                                            </td>
                                            <td>
<<<<<<< Updated upstream
                                                {item.thumbnail === "" ? <div></div> : <img  style={{width:"100px", height:"auto"}} alt='thumbnail' src={item.thumbnail} />}

=======
                                                {item.thumbnail === "" ? <div></div> : <img style={{ width: '100px', height: 'auto' }} alt='thumnail' src={item.thumbnail} />}
>>>>>>> Stashed changes
                                            </td>
                                            <td>
                                                {item.title}
                                            </td>
                                            <td>
                                                {item.status === "active" ? <Badge style={{ width: 100.21 }} bg="success">Hoạt động</Badge> : <Badge bg="danger">Dừng hoạt động</Badge>}
                                            </td>
                                            <td>
                                                <Button style={{ margin: 1 }} variant="secondary"><Link style={{ textDecoration: 'none', color: 'white' }} to={`/admin/product/detail/${item._id}`} >Chi tiết</Link></Button>
                                                <Button style={{ margin: 1 }} variant="warning"><Link style={{ textDecoration: 'none', color: 'white' }} to={`/admin/product/edit/${item._id}`} >Chỉnh sửa</Link></Button>
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