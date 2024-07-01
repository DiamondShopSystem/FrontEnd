import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import axios from 'axios';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactPaginate from 'react-paginate';

const CartManagement = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState([]);
    const location = useLocation();

    const itemsPerPage = pagination.limitItems;
    const pageCount = pagination.totalPage;
    const currentPage = pagination.currentPage;
    const [selectedPage, setSelectedPage] = useState(searchParams.get("page") ? parseInt(searchParams.get("page")) - 1 : 0);

    useEffect(() => {
        fetchData(selectedPage + 1);
    }, [selectedPage, location]);

    useEffect(() => {
        const params = {};
        if (selectedPage !== 0) params.page = selectedPage === 0 ? currentPage : selectedPage + 1;
        setSearchParams(params);
    }, [orders, selectedPage, currentPage, setSearchParams]);

    useEffect(() => {
        if (location.state && location.state.success) {
            toast.success('Cập nhật giỏ hàng thành công');
        }
    }, [location.state]);

    const fetchData = (page) => {
        setLoading(true);
        axios.get('/admin/orders', { params: { page } })
            .then(function (response) {
                setOrders(response.data.records);
                setPagination(response.data.pagination);
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
                setLoading(false);
            });
    };

    const deleteOrder = async (id) => {
        axios.delete(`/admin/orders/delete/${id}`)
            .then(response => {
                console.log(response);
                fetchData(selectedPage + 1);
                toast.success('Xóa thành công');
            })
            .catch(error => {
                console.error(error);
                toast.error('Xóa không thành công');
            });
    };

    const handlePageClick = (event) => {
        const newPage = event.selected;
        setSelectedPage(newPage);
        const params = {};
        params.page = newPage;
        setSearchParams(params);
    };

    return (
        <>
            <ToastContainer />
            <Container className='cartAdmin__container'>
                <h1>Quản Lý Đơn Hàng</h1>
                <Card>
                    <Card.Header>Danh sách đơn hàng</Card.Header>
                    <Card.Body>
                        {loading ? (
                            <div>Loading...</div>
                        ) : (
                            <>
                                <table className='table table-hover table-sm centered-table'>
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Hình ảnh</th>
                                            <th>Sản phẩm</th>
                                            <th>Số lượng</th>
                                            <th>Ngày đặt</th>
                                            <th>Trạng thái</th>
                                            <th>Tên khách hàng</th>
                                            <th>Hành động</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.map((order, index) => (
                                            <tr key={order._id}>
                                                <td>{index + 1 + selectedPage * itemsPerPage}</td>
                                                <td>
                                                    <ul>
                                                        {order.products.map((product, idx) => (
                                                            <li key={idx}>
                                                                <img style={{ width: '50px', height: 'auto' }} alt='product-thumbnail' src={product.thumbnail} />
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </td>
                                                <td>
                                                    <ul>
                                                        {order.products.map((product, idx) => (
                                                            <li key={idx}>
                                                                {product.title}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </td>
                                                <td>
                                                    <ul>
                                                        {order.products.map((product, idx) => (
                                                            <li key={idx}>
                                                                {product.quantity}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </td>
                                                <td>{new Date(order.orderDate).toLocaleString()}</td>
                                                <td>
                                                    {order.status === "completed" ? <Badge bg="success">Hoàn thành</Badge> : <Badge bg="warning">Chờ xử lý</Badge>}
                                                </td>
                                                <td>{order.customerName}</td>
                                                <td>
                                                    <Button
                                                        style={{ margin: 1 }}
                                                        variant="danger"
                                                        onClick={() => deleteOrder(order._id)}
                                                    >
                                                        Xóa
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <ReactPaginate
                                    breakLabel="..."
                                    nextLabel="sau >"
                                    onPageChange={handlePageClick}
                                    pageRangeDisplayed={2}
                                    pageCount={pageCount}
                                    previousLabel="< trước"
                                    containerClassName='cartAdmin-reactPaginate-container'
                                    pageClassName='cartAdmin-reactPaginate-page'
                                    pageLinkClassName='cartAdmin-reactPaginate-page-link'
                                    activeClassName='cartAdmin-active-page'
                                    forcePage={selectedPage}
                                />
                            </>
                        )}
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default CartManagement;
