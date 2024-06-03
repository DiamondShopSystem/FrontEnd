import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space, Button } from 'antd';
import '../../styles/Category.css';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';



const baseURL = process.env.BASEURL;

const columns = [
    { field: 'stt', headerName: '', width: 70 },
    { filed: 'image', headerName: 'Ảnh', width: 200 },
    { field: 'fullName', headerName: 'Họ và Tên', width: 260 },
    {
        field: 'email',
        headerName: 'Email',
        type: 'number',
        width: 90,
    }
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const Category = () => {
    const navigate = useNavigate();
    const { Search } = Input;


    const onSearch = () => {

        // navigate("/create");
    };

    const addCategory = () => {
        navigate("/admin/category/create");
    }

    return (
        <Container className='admincategory__container'>
            <Row>
                <Col xs="4">
                    <Search placeholder="Tìm kiếm danh mục" onSearch={onSearch} enterButton />
                </Col>
                <Col xs="4"></Col>
                <Col xs="4" className='flex-end'>
                    <Button type="primary" style={{ background: "green" }} onClick={addCategory}>Thêm mới danh mục</Button>
                </Col>
            </Row>
            <div style={{ height: 400, width: '100%', marginTop: 20 }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>

        </Container>
    )
}

export default Category;