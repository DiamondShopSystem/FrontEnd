import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Input } from 'antd';
import Badge from 'react-bootstrap/Badge';
import axios from 'axios';
import { useSearchParams, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from "react-router-dom";
import '../../styles/Product.css';
import ReactPaginate from 'react-paginate';





const Product = () => {
    const { Search } = Input;
    const [searchParams, setSearchParams] = useSearchParams();
    const [product, setProduct] = useState([]);
    const [filterState, setFilterState] = useState([]);
    const [pagination, setPagination] = useState([]);
    const [searchQuery, setSearchQuery] = useState(searchParams.get("keyword") || "");
    const [inputValue, setInputValue] = useState(searchParams.get("keyword") || "");
    const [filterStatusQuery, setfilterStatusQuery] = useState(searchParams.get("status") || "");
    const location = useLocation();

    // const [currentItems, setCurrentItems] = useState([]);
    const itemsPerPage = pagination.limitItems;
    // const [pageCount, setPageCount] = useState(0);
    const pageCount = pagination.totalPage;
    const currentPage = pagination.currentPage;
    const [selectedPage, setSelectedPage] = useState(searchParams.get("page") ? parseInt(searchParams.get("page")) - 1 : 0);

    useEffect(() => {
        fetchData(searchQuery, filterStatusQuery, selectedPage + 1);
    }, [searchQuery, filterStatusQuery, selectedPage]);

    useEffect(() => {
        const params = {};
        if (filterStatusQuery) params.status = filterStatusQuery;
        if (searchQuery) params.keyword = searchQuery;
        if (selectedPage !== 0) params.page = selectedPage === 0 ? currentPage : selectedPage + 1;
        setSearchParams(params);
        console.log(selectedPage);
    }, [product, selectedPage, currentPage, filterStatusQuery, searchQuery, setSearchParams]);

    useEffect(() => {
        if (location.state && location.state.success) {
            toast.success('Thêm mới thành công');
        }
    }, [location.state]);

    // Lấy data thông qua API
    const fetchData = (keyword, status, page) => {
        axios.get('/admin/product', { params: { keyword, status, page } })
            .then(function (response) {
                setProduct(response.data.records);
                setFilterState(response.data.filterState);
                setPagination(response.data.pagination);
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
            params.page = 0;
            setSearchParams(params);
            setSearchQuery(value);
            setSelectedPage(0);
            // fetchData(value, filterStatusQuery);
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



    const handleFilterStatusChange = (status) => {
        const params = {};
        if (status) params.status = status;
        if (searchQuery) params.keyword = searchQuery;
        params.page = 0;
        setSearchParams(params);
        setfilterStatusQuery(status);
        setSelectedPage(0);
    };

    // useEffect(() => {
    //     const newOffset = ((selectedPage - 1) * itemsPerPage) % product.length;
    //     setCurrentItems(product.slice(newOffset, newOffset + itemsPerPage));
    //     setPageCount(Math.ceil(product.length / itemsPerPage));
    // }, [product, selectedPage]);


    const handlePageClick = (event) => {
        const newPage = event.selected;
        setSelectedPage(newPage);
        const params = {};
        if (filterStatusQuery) params.status = filterStatusQuery;
        if (searchQuery) params.keyword = searchQuery;
        params.page = newPage;
        setSearchParams(params);
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
                                                {index + 1 + selectedPage * itemsPerPage}
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
                        <ReactPaginate
                            breakLabel="..."
                            breakClassName='Product-admin-pages-product-breakLabel'
                            nextLabel="sau >"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={2}
                            pageCount={pageCount}
                            previousLabel="< trước"
                            previousClassName='Product-admin-pages-product-previous-ring'
                            previousLinkClassName='Product-admin-pages-product-previous-link-ring'
                            nextLinkClassName='Product-admin-pages-product-next-link-ring'
                            containerClassName='Product-admin-pages-product-reactPaginate-container'
                            pageClassName='Product-admin-pages-product-reactPaginate-page'
                            pageLinkClassName='Product-admin-pages-product-reactPaginate-page-link'
                            activeClassName='Product-admin-pages-product-active-ring'
                            // hrefBuilder={hrefBuilder}
                            forcePage={selectedPage}
                        />
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default Product;