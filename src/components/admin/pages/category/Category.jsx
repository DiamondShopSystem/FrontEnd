import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Input, Table } from 'antd';
import Badge from 'react-bootstrap/Badge';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/Category.css';



const Category = () => {

    const { Search } = Input;
    const [searchParams, setSearchParams] = useSearchParams();
    const [category, setCategory] = useState([]);
    const [filterState, setFilterState] = useState([]);
    const [searchQuery, setSearchQuery] = useState(searchParams.get("keyword") || "");
    const [inputValue, setInputValue] = useState(searchParams.get("keyword") || "");
    const [filterStatusQuery, setfilterStatusQuery] = useState(searchParams.get("status") || "");
    const location = useLocation();
    
    useEffect(() => {
        fetchData(searchQuery, filterStatusQuery);
    }, [searchQuery, filterStatusQuery])

    useEffect(() => {
        if (location.state && location.state.success) {
            toast.success('Thêm mới thành công');
        }
    }, [location.state]);
    // Lấy data thông qua API
    const fetchData = (keyword, status) => {
        axios.get('/admin/category', { params: { keyword, status } })
            .then(function (response) {
                setCategory(response.data.records);
                setFilterState(response.data.filterState);
                console.log(response.data.filterState);
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    // Chức năng tìm kiếm 
    const onSearch = (value) => {
        try {
            const params = {};
            if (filterStatusQuery) params.status = filterStatusQuery;
            if (value) params.keyword = value;
            setSearchParams(params);
            setSearchQuery(value);
        } catch (error) {
            console.log(error);
        }
    };



    // Xóa danh mục
    const deleteCategory = async (id) => {
        axios.delete(`/admin/category/delete/${id}`)
            .then(response => {
                console.log(response);
                fetchData();
                toast.success('Xóa thành công')
            })
            .catch(error => {
                console.error(error);
                toast.error('Xóa không thành công');
            });
    };

    const handleFilterStatusChange = (status) => {
        const params = {};
        if (status) params.status = status;
        if (searchQuery) params.keyword = searchQuery;
        setSearchParams(params);
        setfilterStatusQuery(status);
    };

    return (
        <>
            <ToastContainer />
            <Container className='admincategory__container'>
                <h1>Danh mục sản phẩm</h1>
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
                                <Search
                                    placeholder="Nhập từ khóa"
                                    onChange={(event) => setInputValue(event.target.value)}
                                    value={inputValue}
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
                                    {/* <th>
                                        Hình ảnh
                                    </th> */}
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
                                {category.map((item, index) => {
                                    return (
                                        <tr>
                                            <td>
                                                {index + 1}
                                            </td>
                                            {/* <td>
                                                {item.thumbnail === "" ? <div></div> : <img alt='thumnail' src={item.thumbnail} />}
                                            </td> */}
                                            <td>
                                                {item.title}
                                            </td>
                                            <td>
                                                {item.status === "active" ? <Badge style={{ width: 100.21 }} bg="success">Hoạt động</Badge> : <Badge bg="danger">Dừng hoạt động</Badge>}
                                            </td>
                                            <td>
                                                <Button style={{ margin: 1 }} variant="secondary"><Link style={{ textDecoration: 'none', color: 'white' }} to={`/admin/category/detail/${item._id}`} >Chi tiết</Link></Button>
                                                <Button style={{ margin: 1 }} variant="warning"><Link style={{ textDecoration: 'none', color: 'white' }} to={`/admin/category/edit/${item._id}`} >Chỉnh sửa</Link></Button>
                                                <Button
                                                    style={{ margin: 1 }}
                                                    variant="danger"
                                                    // color='error'
                                                    type='submit'
                                                    onClick={(e) => deleteCategory(item._id)}
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

export default Category;
