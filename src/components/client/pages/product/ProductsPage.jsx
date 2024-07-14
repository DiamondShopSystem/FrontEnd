import React, { useEffect, useState } from 'react'
import axios from 'axios';
import BoxProduct from '../../mixins/BoxProduct';
import { useLocation } from 'react-router-dom';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { Input } from 'antd';
import ReactPaginate from 'react-paginate';
import "../../styles/Client.css";

const ProductsPage = () => {
    const location = useLocation();
    const { Search } = Input;
    const [searchParams, setSearchParams] = useSearchParams();
    const [pageCount, setPageCount] = useState(0);
    const [searchQuery, setSearchQuery] = useState(searchParams.get("keyword") || "");
    const [inputValue, setInputValue] = useState(searchParams.get("keyword") || "");
    const [filterStatusQuery, setfilterStatusQuery] = useState(searchParams.get("status") || "");
    const [paginationQuery, setPaginationQuery] = useState(searchParams.get("page"));

    let limit = 10;
    const getSlugFromUrl = () => {
        const currentUrl = window.location.pathname;
        return currentUrl.split('/products/')[1];
    };
    const [products, setProducts] = useState([]);
    const handlePageClick = (data) => {
        const params = {};
        let currentPage = data.selected + 1;
        if (filterStatusQuery) params.status = filterStatusQuery;
        if (searchQuery) params.keyword = searchQuery;
        if (data && currentPage != 1) params.page = currentPage;
        setSearchParams(params);
        setPaginationQuery(currentPage);
        console.log(currentPage);
    }
    useEffect(() => {
        fetchData();
    }, [location.pathname]);

    // Lấy data thông qua API
    const fetchData = () => {
        const slug = getSlugFromUrl();
        axios.get(`/products/${slug}`,)
            .then(function (response) {
                setProducts(response.data.records);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    return (
        <>
            <section className='productspage__container'>
                <div className='productspage__banner'>
                    <img style={{ width: '100%' }} alt='header-image' src='https://file.hstatic.net/1000381168/collection/1920x820px_c920d1d4bbd04d84b13ad580976272cd.png' />
                </div>
                <div className='container'>
                    <div className='row productspage__gird'>
                        {products.map((item) => {
                            console.log(products);
                            return <BoxProduct className='col-3' product={item} key={item.id} />
                        })}
                    </div>

                    <div className='center'>
                        <ReactPaginate
                            previousLabel={'Trang trước'}
                            nextLabel={'Trang sau'}
                            breakLabel={"..."}
                            pageCount={pageCount} // Thay bằng tổng số trang theo sản phẩm
                            marginPagesDisplayed={3}
                            pageRangeDisplayed={4}
                            onPageChange={handlePageClick}
                            containerClassName='pagination'
                            pageClassName='page-item'
                            pageLinkClassName='page-link'
                            previousClassName='page-item'
                            previousLinkClassName='page-link'
                            nextClassName='page-item'
                            nextLinkClassName='page-link'
                            breakClassName='page-item'
                            breakLinkClassName='page-link'
                            activeClassName='active'
                        />
                    </div>
                </div>

            </section>
        </>

    )
}

export default ProductsPage;