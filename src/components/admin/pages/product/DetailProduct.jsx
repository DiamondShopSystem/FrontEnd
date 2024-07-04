import React, { useState, useEffect } from 'react'
import '../../styles/Category.css';
import { Container} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Badge from 'react-bootstrap/Badge';
import parse from 'html-react-parser';



const DetailProduct = (req, res) => {
    const [product, setProduct] = useState([]);
    const [category, setCategory] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        axios.get("/admin/product/detail/" + id)
            .then(function (response) {
                setProduct(response.data.record);
                setCategory(response.data.category);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    return (
        <>
            <Container className='admindetailcategory__container'>
                <h1 className='mb-4'>Chi tiết sản phẩm</h1>
                <h3 className='mb-4'>Tên sản phẩm: {product.title}</h3>
                <h4 className='mb-4'>Danh mục: {category.title}</h4>
                {
                    (product.status === "active") ? (<div><span className='mb-4'><b>Trạng thái:</b> <Badge style={{ width: 100.21 }} bg="success">Hoạt động</Badge></span></div>)
                        : (<div><span className='mb-4'><b>Trạng thái:</b> <Badge style={{ width: 100.21 }} bg="danger">Dừng hoạt động</Badge></span></div>)
                }
                <div className='mb-4 mt-2'><b>Giá:</b> {product.price}</div>
                <div className='mb-4 mt-2'><b>Chất liệu:</b> {product.material}</div>
                <div className='mb-4 mt-2'><b>Viên chính:</b> {product.mainGemStone}</div>
                <div className='mb-4 mt-2'><b>Viên phụ:</b> {product.secondGemStone}</div>
                <div className='mb-4'><b>Ni:</b> {product.size}</div>
                <div className='mt-4'><b>Mô tả:</b> {parse(`${product.description}`)}</div>
            </Container>
        </>
    )
}

export default DetailProduct;