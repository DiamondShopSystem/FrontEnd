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
import '../../styles/Account.css'; // Assuming you have a generic styles file

const UserAccount = () => {
    const { Search } = Input;
    const [searchParams, setSearchParams] = useSearchParams();
    const { reset } = useForm();
    const [userAccounts, setUserAccounts] = useState([]);
    const [filterState, setFilterState] = useState([]);
    const [searchQuery, setSearchQuery] = useState(searchParams.get("keyword") || "");
    const [filterStatusQuery, setfilterStatusQuery] = useState(searchParams.get("status") || "");
    const location = useLocation();

    useEffect(() => {
        fetchData();
    }, [filterStatusQuery]);

    useEffect(() => {
        if (location.state && location.state.success) {
            toast.success('Thêm mới thành công');
        }
    }, [location.state]);

    const fetchData = () => {
        axios.get('/admin/account/user', { params: { keyword: searchQuery, status: filterStatusQuery } })
            .then(function (response) {
                setUserAccounts(response.data.records);
                setFilterState(response.data.filterState);
                console.log(userAccounts);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const onSearch = (event) => {
        try {
            fetchData();
        } catch (error) {
            console.log(error);
        }
    };

    const deleteUserAccount = async (id) => {
        axios.delete(`/admin/account/user/delete/${id}`)
            .then(response => {
                console.log(response);
                fetchData();
                toast.success('Xóa thành công');
            })
            .catch(error => {
                console.error(error);
                toast.error('Xóa không thành công');
            });
    };

    return (
        <>
            <ToastContainer />
            <Container className='adminAccount__container'>
                <h1>Tài khoản khách hàng</h1>
                <Card className='mb-3'>
                    <Card.Header>Bộ lọc và tìm kiếm</Card.Header>
                    <Card.Body>
                        <Row>
                            <Col xs="6">
                                {filterState.map((item) => (
                                    <Button
                                        key={item.status}
                                        onClick={() => setfilterStatusQuery(item.status)}
                                        value={item.status}
                                        style={{ marginRight: "2px" }}
                                        variant="outline-success"
                                        active={item.active}
                                    >
                                        {item.name}
                                    </Button>
                                ))}
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
                <Card>
                    <Card.Header>Danh sách</Card.Header>
                    <Card.Body>
                        <Row>
                            <Col xs="6"></Col>
                            <Col style={{ textAlign: "right" }} xs="6">
                                <Link to={"create"}><Button variant="success">Thêm mới</Button></Link>
                            </Col>
                        </Row>
                        <table className='table table-hover table-sm'>
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Hình ảnh</th>
                                    <th>Tên</th>
                                    <th>Trạng thái</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userAccounts.map((item, index) => (
                                    <tr key={item._id}>
                                        <td>{index + 1}</td>
                                        <td>{item.thumbnail === "" ? <div></div> : <img alt='thumbnail' />}</td>
                                        <td>{item.name}</td>
                                        <td>
                                            {item.status === "active" ? 
                                                <Badge style={{ width: 100.21 }} bg="success">Hoạt động</Badge> : 
                                                <Badge style={{ width: 100.21 }} bg="danger">Dừng hoạt động</Badge>
                                            }
                                        </td>
                                        <td>
                                            <Button className='me-2' style={{ margin: 1 }} variant="secondary">
                                                <Link style={{ textDecoration: 'none', color: 'white' }} to={`/admin/userAccount/detail/${item._id}`}>Chi tiết</Link>
                                            </Button>
                                            <Button className='me-2' style={{ margin: 1 }} variant="warning">
                                                <Link style={{ textDecoration: 'none', color: 'white' }} to={`/admin/userAccount/edit/${item._id}`}>Chỉnh sửa</Link>
                                            </Button>
                                            <Button
                                                style={{ margin: 1 }}
                                                variant="danger"
                                                onClick={() => deleteUserAccount(item._id)}
                                                className='me-2'
                                            >
                                                Xóa
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default UserAccount;
