import React, { useState, useEffect } from 'react'
import '../../styles/Category.css';
import { Container} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Badge from 'react-bootstrap/Badge';
import parse from 'html-react-parser';



const DetailProduct = (req, res) => {
    const [data, setData] = useState([]);

    const { id } = useParams();
    useEffect(() => {
        axios.get("/admin/product/detail/" + id)
            .then(function (response) {
                console.log(response.data.data);
                setData(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    return (
        <>
            <Container className='admindetailcategory__container'>
                <h1 className='mb-4'>Chi tiết sản phẩm</h1>
                <h3 className='mb-4'>Tên sản phẩm: {data.title}</h3>
                <h4 className='mb-4'>Danh mục: {data.categoryTitle}</h4>
                {
                    (data.status === "active") ? (<span className='mb-4'>Trạng thái: <Badge style={{ width: 100.21 }} bg="success">Hoạt động</Badge></span>)
                        : (<span className='mb-4'>Trạng thái: <Badge style={{ width: 100.21 }} bg="danger">Dừng hoạt động</Badge></span>)
                }
                <h5 className='mb-4 mt-2'>Giá: {data.price}</h5>
                <h5 className='mb-4'>Ni: {data.size}</h5>
                <div className='mt-4'>Mô tả: {parse(`${data.description}`)}</div>
            </Container>
        </>
    )
}

export default DetailProduct;