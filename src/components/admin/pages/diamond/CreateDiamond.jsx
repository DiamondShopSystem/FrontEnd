import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Form, Input, Radio } from 'antd';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import { TreeSelect } from 'antd';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const CreateDiamond = () => {
    const {
        reset,
    } = useForm();
    const [money, setMoney] = useState(1);
    const [bark, setBark] = useState(1);
    const [work, setWork] = useState(1);
    const [percent, setPercent] = useState(1);
    const navigate = useNavigate();
    // Viên chính
    const [color, setColor] = useState("");
    // Viên phụ
    const [clarity, setClarity] = useState("");
    // Chất liệu
    const [cut, setCut] = useState("");
    // Lấy danh sách danh mục
    const [categories, setCategories] = useState("");
    // Danh mục của sản phẩm
    const [category_id, setCategory_Id] = useState("");
    // Ảnh
    const [thumbnail, setThumbnail] = useState("");
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("active");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(1);
    const [certificate, setCeftificate] = useState("");
    // Preview ảnh
    const [preview, setPreview] = useState("");
    const [previewCef, setPreviewCef] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    // Lấy data thông qua API
    const fetchData = () => {
        axios.get('/admin/diamond/create')
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
    // Chọn ảnh
    const onChangeCeftificate = (e) => {
        console.log(e.target.files);
        setCeftificate(e.target.files[0]);
        setPreviewCef(URL.createObjectURL(e.target.files[0]));
    }
    // Popup Scroll Select Tree
    const onPopupScroll = (e) => {
        console.log('onPopupScroll', e);
    };

    //Hàm submit gửi form tạo mới sản phẩm
    const addDiamond = async (e) => {
        const configuration = {
            method: "post",
            url: "admin/diamond/create",
            headers: { "Content-Type": "multipart/form-data" },
            data: {
                title,
                status,
                description,
                money,
                bark,
                work,
                color,
                thumbnail,
                category_id,
                certificate,
                clarity,
                cut,
            },
        };
        await axios(configuration)
            .then((result) => {
                reset();
                fetchData();
                navigate('/admin/diamond', { state: { success: true } });
            })
            .catch((error) => { console.log(error); toast.error('Thêm mới không thành công') })
    }
    return (
        <>
            <ToastContainer />
            <Container style={{ marginTop: '20px' }}>
                <h1>Tạo mới kim cương</h1>
                <Form onFinish={addDiamond} size='large' layout='vertical' labelCol={{ span: 4 }} enctype="multipart/form-data" >
                    <Form.Item name='title' label="Tiêu đề" style={{ width: '100%' }}>
                        <Input type='text' onChange={(e) => setTitle(e.target.value)} value={title} />
                    </Form.Item>
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
                    <Form.Item name='color' label="Nước" style={{ width: '100%' }}>
                        <Input type='text' onChange={(e) => setColor(e.target.value)} value={color} />
                    </Form.Item>
                    <Form.Item name='clarity' label="Độ tinh khiết" style={{ width: '100%' }}>
                        <Input type='text' onChange={(e) => setClarity(e.target.value)} value={clarity} />
                    </Form.Item>
                    <Form.Item name='cut' label="Giác cắt" style={{ width: '100%' }}>
                        <Input type='text' onChange={(e) => setCut(e.target.value)} value={cut} />
                    </Form.Item>
                    
                    {/* <Form.Item name='money' label="Tiền Kim Cương" style={{ width: '100%' }}>
                        <Input type='number' onChange={(e) => setMoney(e.target.value)} value={money} />
                    </Form.Item>
                    <Form.Item name='bark' label="Vỏ Kim Cương" style={{ width: '100%' }}>
                        <Input type='number' onChange={(e) => setBark(e.target.value)} value={bark} />
                    </Form.Item>
                    <Form.Item name='work' label="Tiền Công" style={{ width: '100%' }}>
                        <Input type='number' onChange={(e) => setWork(e.target.value)} value={work} />
                    </Form.Item>
                    <Form.Item name='percent' label="Tỉ lệ áp giá ( % )" style={{ width: '100%' }}>
                        <Input type='number' onChange={(e) => {
                            setPercent(e.target.value);
                        }} value={percent} />
                    </Form.Item> */}
                    <Form.Item name='price' label="Giá" style={{ width: '100%' }}>
                        <Input type='number' value={price}  />
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
                    {/* <div className='mt-2 mb-4'>
                        <div className="App">
                            <div className='mb-2'>Giấy kiểm định</div>
                            <input name="certificate"
                                accept="image/*" type="file" onChange={onChangeCeftificate} />
                            <div style={{ marginTop: "5px" }}>
                                {previewCef && <img style={{ width: "100px", height: "auto" }} src={previewCef} />}
                            </div>
                        </div>
                    </div> */}
                    <div className="mt-2">
                        <Radio.Group onChange={onChangeStatus} value={status}>
                            <Radio value={"active"}>Hoạt động</Radio>
                            <Radio value={"inactive"}>Dừng hoạt động</Radio>
                        </Radio.Group>
                    </div>
                    <Form.Item className='admincreateproduct__wrapperbtn' >
                        <Button style={{ marginTop: "20px", marginBottom: '10px' }} variant="primary" type='submit'>Tạo mới</Button>
                    </Form.Item>
                </Form>
            </Container>
        </>
    )
}

export default CreateDiamond;