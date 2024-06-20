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
    const {
        reset,
    } = useForm()
    const [category, setCategory] = useState([]);
    const [filterState, setFilterState] = useState([]);
    const [searchQuery, setSearchQuery] = useState(searchParams.get("keyword") || "");
    const [filterStatusQuery, setfilterStatusQuery] = useState(searchParams.get("status") || "");
    const location = useLocation();
    React.useEffect(() => {
        fetchData()
    }, [filterStatusQuery])

    useEffect(() => {
        fetchData();
    }, [filterStatusQuery]);

    useEffect(() => {
        if (location.state && location.state.success) {
            toast.success('Thêm mới thành công');
        }
    }, [location.state]);
    // Lấy data thông qua API
    const fetchData = () => {
        axios.get('/admin/category', { params: { keyword: searchQuery, status: filterStatusQuery } })
            .then(function (response) {
                setCategory(response.data.records);
                setFilterState(response.data.filterState);
                console.log(category);
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    // Chức năng tìm kiếm 
    const onSearch = (event) => {
        try {
            fetchData();
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
    }

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
                                {category.map((item, index) => {
                                    return (
                                        <tr>
                                            <td>
                                                {index + 1}
                                            </td>
                                            <td>
                                                {item.thumnail === "" ? <div></div> : <img alt='thumnail' />}

                                            </td>
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

// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { Input } from 'antd';
// import Badge from 'react-bootstrap/Badge';
// import { useForm } from "react-hook-form";
// import { useSearchParams, Link } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import '../../styles/Category.css';

// const Category = () => {
//     const { Search } = Input;
//     const [searchParams, setSearchParams] = useSearchParams();
//     const { reset } = useForm();
//     const [category, setCategory] = useState([]);
//     const [filterState, setFilterState] = useState([]);
//     const [searchQuery, setSearchQuery] = useState(searchParams.get("keyword") || "");
//     const [filterStatusQuery, setFilterStatusQuery] = useState(searchParams.get("status") || "");

//     useEffect(() => {
//         fetchData();
//     }, [filterStatusQuery]);

//     // Lấy data thông qua dữ liệu mẫu
//     const fetchData = () => {
//         const sampleData = {
//             records: [
//                 { _id: 1, thumnail: '', title: 'Category 1', status: 'active' },
//                 { _id: 2, thumnail: '', title: 'Category 2', status: 'inactive' },
//                 { _id: 3, thumnail: '', title: 'Category 3', status: 'active' },
//             ],
//             filterState: [
//                 { name: 'All', status: '', active: filterStatusQuery === '', },
//                 { name: 'Active', status: 'active', active: filterStatusQuery === 'active' },
//                 { name: 'Inactive', status: 'inactive', active: filterStatusQuery === 'inactive' },
//             ]
//         };
//         setCategory(sampleData.records);
//         setFilterState(sampleData.filterState);
//     };

//     // Chức năng tìm kiếm 
//     const onSearch = () => {
//         fetchData();
//     };

//     // Xóa danh mục
//     const deleteCategory = async (id) => {
//         const newCategory = category.filter(item => item._id !== id);
//         setCategory(newCategory);
//         toast.success('Xóa thành công');
//     };

//     return (
//         <>
//             <ToastContainer />
//             <Container className='admincategory__container'>
//                 <h1>Danh mục sản phẩm</h1>
//                 <Card className='mb-3'>
//                     <Card.Header>Bộ lọc và tìm kiếm</Card.Header>
//                     <Card.Body>
//                         <Row>
//                             <Col xs="6">
//                                 {filterState.map((item) => {
//                                     return (
//                                         <Button 
//                                             key={item.status}
//                                             onClick={() => setFilterStatusQuery(item.status)} 
//                                             value={item.status} 
//                                             style={{ marginRight: "2px" }} 
//                                             variant="outline-success" 
//                                             active={item.active}
//                                         >
//                                             {item.name}
//                                         </Button>
//                                     );
//                                 })}
//                             </Col>
//                             <Col xs="6">
//                                 <Search
//                                     placeholder="Nhập từ khóa"
//                                     onChange={(event) => setSearchQuery(event.target.value)}
//                                     value={searchQuery}
//                                     size='large'
//                                     enterButton
//                                     onSearch={onSearch}
//                                 />
//                             </Col>
//                         </Row>
//                     </Card.Body>
//                 </Card>
//                 <Card>
//                     <Card.Header>Danh sách</Card.Header>
//                     <Card.Body>
//                         <Row>
//                             <Col xs="6"></Col>
//                             <Col style={{ textAlign: "right" }} xs="6">
//                                 <Link to={"create"}><Button variant="success">Thêm mới</Button></Link>
//                             </Col>
//                         </Row>
//                         <table className='table table-hover table-sm centered-table'>
//                             <thead>
//                                 <tr>
//                                     <th>STT</th>
//                                     <th>Hình ảnh</th>
//                                     <th>Tiêu đề</th>
//                                     <th>Trạng thái</th>
//                                     <th>Hành động</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {category.map((item, index) => (
//                                     <tr key={item._id}>
//                                         <td>{index + 1}</td>
//                                         <td>{item.thumnail === "" ? <div></div> : <img alt='thumnail' />}</td>
//                                         <td>{item.title}</td>
//                                         <td>
//                                             {item.status === "active" ? 
//                                                 <Badge style={{ width: 100.21 }} bg="success">Hoạt động</Badge> : 
//                                                 <Badge style={{ width: 100.21 }} bg="danger">Dừng hoạt động</Badge>
//                                             }
//                                         </td>
//                                         <td>
//                                             <Button className='me-2' style={{ margin: 1 }} variant="secondary">
//                                                 <Link style={{ textDecoration: 'none', color: 'white' }} to={`/admin/category/detail/${item._id}`}>Chi tiết</Link>
//                                             </Button>
//                                             <Button className='me-2' style={{ margin: 1 }} variant="warning">
//                                                 <Link style={{ textDecoration: 'none', color: 'white' }} to={`/admin/category/edit/${item._id}`}>Chỉnh sửa</Link>
//                                             </Button>
//                                             <Button
//                                                 style={{ margin: 1 }}
//                                                 variant="danger"
//                                                 onClick={() => deleteCategory(item._id)}
//                                                 className='me-2'
//                                             >
//                                                 Xóa
//                                             </Button>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </Card.Body>
//                 </Card>
//             </Container>
//         </>
//     );
// }

// export default Category;
