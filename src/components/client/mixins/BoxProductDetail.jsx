import React from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "../styles/BoxProductDetail.css";

const BoxProductDetail = ({ product }) => {
    const { _id, title, thumbnail, price, mainGemStone, material, secondGemStone, size } = product;
    console.log(mainGemStone);

    const addToCart = async () => {
        await axios.post(`/cart/add/${_id}`, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then((result) => {
                console.log(result);
                const checkResult = result.data;
                if (checkResult.code === 200) {
                    toast.success('Thêm vào giỏ hàng thành công');
                } else {
                    toast.success('Không thành công');
                }

            })
            .catch(error => {
                toast.error('Không thành công');
                console.log(error);
            });
    }

    return (
        <>
            <ToastContainer />
            <div className='row'>
                <div className='col-6' >
                    <img src={thumbnail} style={{ width: '70%', height: 'auto', marginLeft: '5rem' }} alt='Ảnh sản phẩm' />
                </div>
                <div className='col-6'>
                    <div className='boxproductdetail__content'>
                        <h2>{title}</h2>
                        <p style={{ color: 'red' }}>{price}</p>
                        <div >
                            <p>Chất liệu</p>
                            <select name='material'>
                                {
                                    material?.map((item, index) => {
                                        return <option value={item} key={index}>{item}</option>
                                    })
                                }
                            </select >
                        </div>
                        <div >
                            <p>Viên chính</p>
                            <select name='mainGemStone'>
                                {
                                    mainGemStone?.map((item, index) => {
                                        return <option value={item} key={index}>{item}</option>
                                    })
                                }
                            </select >
                        </div>
                        <div >
                            <p>Viên Phụ</p>
                            <select name='mainGemStone'>
                                {
                                    secondGemStone?.map((item, index) => {
                                        return <option value={item} key={index}>{item}</option>
                                    })
                                }
                            </select >
                        </div>
                        <div >
                            <p>Ni</p>
                            <select name='size'>
                                {
                                    size?.map((item, index) => {
                                        return <option value={item} key={index}>{item}</option>
                                    })
                                }
                            </select >
                        </div>
                    </div>
                    <button onClick={addToCart}>Mua Ngay</button>
                </div>

            </div>
        </>
    )
}

export default BoxProductDetail;