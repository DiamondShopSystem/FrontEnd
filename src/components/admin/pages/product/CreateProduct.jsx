import React, { useEffect, useState } from 'react';
import '../../styles/Category.css';
import { Container } from 'react-bootstrap';
import { Form, Input, Radio } from 'antd';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import { TreeSelect } from 'antd';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/Product.css';
import { useNavigate } from 'react-router-dom';

const CreateProduct = () => {
    const {
        reset,
    } = useForm();
    const navigate = useNavigate();
    // Viên chính
    const [mainGemStone, setMainGemStone] = useState("");
    // Viên phụ
    const [secondGemStone, setSecondGemStone] = useState("");
    // Chất liệu
    const [material, setMaterial] = useState("");
    // Nổi bật
    const [isHighlight, setIsHighLight] = useState(false);
    // Lấy danh sách danh mục
    const [categories, setCategories] = useState("");
    // Danh mục của sản phẩm
    const [category_id, setCategory_Id] = useState("");
    // Ảnh
    const [thumbnail, setThumbnail] = useState("");
    // Kích thước (Ni)
    const [size, setSize] = useState("");
    // Tiêu đề
    const [title, setTitle] = useState("");
    // Trạng thái
    const [status, setStatus] = useState("active");
    // Mô tả
    const [description, setDescription] = useState("");
    // Giá
    const [price, setPrice] = useState(1);
    // Preview ảnh
    const [preview, setPreview] = useState("");


    useEffect(() => {
        fetchData();
    }, []);

    // Lấy data thông qua API
    const fetchData = () => {
        axios.get('/admin/product/create')
            .then(function (response) {
                setCategories(response.data.records);
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    const onSetCategory = (newValue) => {
        setCategory_Id(newValue);
    }

    // Chọn trạng thái hoạt động
    const onChangeHighlight = (e) => {
        console.log('radio checked', e.target.value);
        setIsHighLight(e.target.value);
    };

    // Chọn trạng thái hoạt động
    const onChangeStatus = (e) => {
        console.log('radio checked', e.target.value);
        setStatus(e.target.value);
    };
    // Chọn ảnh
    const onChangeImage = (e) => {
        console.log(e.target.files);
        setThumbnail(e.target.files[0]);
        setPreview(URL.createObjectURL(e.target.files[0]));
    }
    // Popup Scroll Select Tree
    const onPopupScroll = (e) => {
        console.log('onPopupScroll', e);
    };

    //Hàm submit gửi form tạo mới sản phẩm
    const addProduct = async (e) => {
        const configuration = {
            method: "post",
            url: "admin/product/create",
            headers: { "Content-Type": "multipart/form-data" },
            data: {
                title,
                status,
                description,
                price,
                size,
                thumbnail,
                category_id,
                isHighlight,
                mainGemStone,
                secondGemStone,
                material
            },
        };
        await axios(configuration)
            .then((result) => {
                reset();
                navigate('/admin/product', { state: { success: true } });
            })
            .catch((error) => { console.log(error); toast.error('Thêm mới không thành công') })
    }
    return (
        <>
            <ToastContainer />
            <Container className='admincreateproduct__container'>
                <h1>Tạo mới sản phẩm</h1>
                <Form onFinish={addProduct} size='large' layout='vertical' labelCol={{ span: 4 }} enctype="multipart/form-data" >
                    <Form.Item name='title' label="Tiêu đề" style={{ width: '100%' }}>
                        <Input type='text' onChange={(e) => setTitle(e.target.value)} value={title} />
                    </Form.Item>
                    <div className="mt-2 mb-2">
                        <Radio.Group onChange={onChangeHighlight} value={isHighlight}>
                            <Radio value={true}>Nổi bật</Radio>
                            <Radio value={false}>Không</Radio>
                        </Radio.Group>
                    </div>
                    <TreeSelect
                        name="category_id"
                        className='mb-2 mt-2'
                        showSearch
                        style={{
                            width: '100%',
                        }}
                        dropdownStyle={{
                            maxHeight: 400,
                            overflow: 'auto',
                        }}
                        placeholder="Chọn danh mục"
                        allowClear
                        treeDefaultExpandAll
                        fieldNames={{ label: "title", value: '_id', children: "children" }}
                        onChange={onSetCategory}
                        treeData={categories}
                        onPopupScroll={onPopupScroll}
                    />
                    <Form.Item name='material' label="Chất liệu" style={{ width: '100%' }}>
                        <Input type='text' onChange={(e) => setMaterial(e.target.value)} value={material} />
                    </Form.Item>
                    <Form.Item name='mainGemStone' label="Viên chính" style={{ width: '100%' }}>
                        <Input type='text' onChange={(e) => setMainGemStone(e.target.value)} value={mainGemStone} />
                    </Form.Item>
                    <Form.Item name='secondGemStone' label="Viên phụ" style={{ width: '100%' }}>
                        <Input type='text' onChange={(e) => setSecondGemStone(e.target.value)} value={secondGemStone} />
                    </Form.Item>
                    <Form.Item name='price' label="Giá" style={{ width: '100%' }}>
                        <Input type='number' onChange={(e) => setPrice(e.target.value)} value={price} />
                    </Form.Item>
                    <Form.Item name='size' label="Kích cỡ (Ni)" style={{ width: '100%' }}>
                        <Input type='number' onChange={(e) => setSize(e.target.value)} value={size} />
                    </Form.Item>
                    <Form.Item name='description' label="Mô tả" style={{ width: '100%' }}>
                        <Editor
                            onEditorChange={(content) => setDescription(content)}
                            apiKey='7kewhhnqfkgy1b51ajibp6aquu8pbcuqgaw64fatnixmljhf'
                            init={{
                                height: 500,
                                menubar: false,
                                plugins: [
                                    'advlist autolink lists link image charmap print preview anchor',
                                    'searchreplace visualblocks code fullscreen',
                                    'insertdatetime media table paste code help wordcount'
                                ],
                                toolbar: 'undo redo | formatselect | bold italic backcolor | \
                                          alignleft aligncenter alignright alignjustify | \
                                          bullist numlist outdent indent | removeformat | help'
                            }}
                        />
                    </Form.Item>
                    <div className='mt-2 mb-4'>
                        <div className="App">
                            <div className='mb-2'>Ảnh</div>
                            <input name="thumbnail"
                                accept="image/*" type="file" onChange={onChangeImage} />
                            <div style={{ marginTop: "5px" }}>
                                {preview && <img style={{ width: "100px", height: "auto" }} src={preview} />}
                            </div>
                        </div>
                    </div>
                    <div className="mt-2">
                        <Radio.Group onChange={onChangeStatus} value={status}>
                            <Radio value={"active"}>Hoạt động</Radio>
                            <Radio value={"inactive"}>Dừng hoạt động</Radio>
                        </Radio.Group>
                    </div>
                    <Form.Item className='admincreateproduct__wrapperbtn' >
                        <Button style={{ marginBottom: "20px" }} variant="primary" type='submit'>Tạo mới</Button>
                    </Form.Item>
                </Form>
            </Container>
        </>
    )
}

export default CreateProduct;