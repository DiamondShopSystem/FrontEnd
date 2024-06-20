import React, { useCallback, useEffect, useRef, useState } from 'react'
import Ring from './Ring';
import '../../styles/RingProducts.css'
import ReactPaginate from 'react-paginate';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import CheckOutCart from '../checkout/CheckOutCart';

const RingProducts = () => {

    const [products, setProducts] = useState([]);
    const itemsPerPage = 8;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [priceFilter, setPriceFilter] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [selectedPage, setSelectedPage] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();

    const applyFilters = useCallback((products) => {
        let filteredProducts = [...products];

        if (priceFilter) {
            if (priceFilter === 'Dưới 50 triệu đồng') {
                filteredProducts = filteredProducts.filter(product => product.price < 50);
            } else if (priceFilter === 'Từ 50 - 100 triệu đồng') {
                filteredProducts = filteredProducts.filter(product => product.price >= 50 && product.price <= 100);
            } else if (priceFilter === 'Từ 100 - 200 triệu đồng') {
                filteredProducts = filteredProducts.filter(product => product.price >= 100 && product.price <= 200);
            } else if (priceFilter === 'Trên 200 triệu đồng') {
                filteredProducts = filteredProducts.filter(product => product.price > 200);
            }
        }

        if (sortOrder) {
            if (sortOrder === 'Giá Từ Cao Đến Thấp') {
                filteredProducts.sort((a, b) => b.price - a.price);
            } else if (sortOrder === 'Giá Từ Thấp Đến Cao') {
                filteredProducts.sort((a, b) => a.price - b.price);
            }
        }

        return filteredProducts;
    }, [priceFilter, sortOrder]);

    useEffect(() => {
        const fetchProducts = async () => {
            const respone = await fetch('https://fakestoreapi.com/products');
            const data = await respone.json();
            setProducts(data);
            const filteredProducts = applyFilters(data);
            setCurrentItems(filteredProducts.slice(0, itemsPerPage));
            setPageCount(Math.ceil(filteredProducts.length / itemsPerPage));
        };
        fetchProducts();
    }, [priceFilter, sortOrder, applyFilters]);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const page = parseInt(params.get('page')) || 1;
        setSelectedPage(page - 1);
    }, [location.search]);

    useEffect(() => {
        const params = new URLSearchParams();
        params.set('page', selectedPage + 1);
        if (priceFilter) {
            params.set('filterprice', priceFilter);
        }
        if (sortOrder) {
            params.set('sort', sortOrder);
        }

        navigate(`?${params.toString()}`);
    }, [selectedPage, priceFilter, sortOrder, navigate]);

    // const hrefBuilder = (pageIndex) => {
    //     const baseUrl = window.location.href.split('?')[0];
    //     const params = new URLSearchParams(window.location.search);
    //     params.set('page', pageIndex + 1);
    //     if (priceFilter) {
    //         params.set('filterprice', priceFilter);
    //     }
    //     if (sortOrder) {
    //         params.set('sort', sortOrder);
    //     }

    //     const url = `${baseUrl}?${params.toString()}`;
    //     return url;
    // };

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const page = parseInt(params.get('page')) || 1;
        const newOffset = ((page - 1) * itemsPerPage) % products.length;
        const filteredProducts = applyFilters(products);
        setCurrentItems(filteredProducts.slice(newOffset, newOffset + itemsPerPage));
        setPageCount(Math.ceil(filteredProducts.length / itemsPerPage));
    }, [location.search, products, applyFilters]);

    const handlePageClick = (event) => {
        // const newOffset = (event.selected * itemsPerPage) % products.length;
        // const filteredProducts = applyFilters(products);
        // setCurrentItems(filteredProducts.slice(newOffset, newOffset + itemsPerPage));
        // navigate(`?page=${event.selected + 1}`);
        setSelectedPage(event.selected);
    };

    const selectRef1 = useRef(null);
    const selectRef2 = useRef(null);
    const [selectWidth1, setSelectWidth1] = useState('auto');
    const [selectWidth2, setSelectWidth2] = useState('auto');

    const updateSelectWidth = (selectRef, setSelectWidth) => {
        if (selectRef.current) {
            const tempSelect = document.createElement('select');
            const tempOption = document.createElement('option');
            tempOption.textContent = selectRef.current.options[selectRef.current.selectedIndex].text;
            tempSelect.style.visibility = 'hidden';
            tempSelect.style.position = 'absolute';
            tempSelect.appendChild(tempOption);
            document.body.appendChild(tempSelect);
            const tempWidth = tempSelect.getBoundingClientRect().width;
            document.body.removeChild(tempSelect);
            setSelectWidth(`${tempWidth + 25}px`);
        }
    };

    useEffect(() => {
        updateSelectWidth(selectRef1, setSelectWidth1);
        updateSelectWidth(selectRef2, setSelectWidth2);
    }, []);

    // const params = new URLSearchParams(location.search);
    // const currentPage = parseInt(params.get('page')) || 1;
    // console.log(currentPage);

    return (

        <section className='RingProducts-container'>
            <div className='RingProducts-title-ring-cover'>
                <h2 className='RingProducts-title-ring'>Nhẫn kim cương</h2>
                <p>*****</p>
            </div>

            <div className='RingProducts-cover-select-ring'>
                <select
                    className='RingProducts-select-ring'
                    ref={selectRef1}
                    onChange={(e) => {
                        setPriceFilter(e.target.value);
                        updateSelectWidth(selectRef1, setSelectWidth1);
                        setSelectedPage(0);
                    }}
                    style={{ width: selectWidth1 }}
                >
                    <option>Mức Giá</option>
                    <option>Dưới 50 triệu đồng</option>
                    <option>Từ 50 - 100 triệu đồng</option>
                    <option>Từ 100 - 200 triệu đồng</option>
                    <option>Trên 200 triệu đồng</option>
                </select>

                <select
                    className='RingProducts-select-ring'
                    ref={selectRef2}
                    onChange={(e) => {
                        setSortOrder(e.target.value);
                        updateSelectWidth(selectRef2, setSelectWidth2);
                    }}
                    style={{ width: selectWidth2 }}
                >
                    <option>Sắp Xếp</option>
                    <option>Giá Từ Cao Đến Thấp</option>
                    <option>Giá Từ Thấp Đến Cao</option>
                </select>
            </div>

            <div className='RingProducts-grid RingProducts-grid-cols-1 RingProducts-grid-cols-2 RingProducts-grid-cols-3 RingProducts-grid-cols-4'>
                {currentItems.map((ring) => <Ring ring={ring} key={ring.id} />)}
                <ToastContainer />
            </div>
            <ReactPaginate
                breakLabel="..."
                breakClassName='RingProducts-breakLabel'
                nextLabel="sau >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< trước"
                previousClassName='RingProducts-previous-ring'
                previousLinkClassName='RingProducts-previous-link-ring'
                nextLinkClassName='RingProducts-next-link-ring'
                containerClassName='RingProducts-reactPaginate-container'
                pageClassName='RingProducts-reactPaginate-page'
                pageLinkClassName='RingProducts-reactPaginate-page-link'
                activeClassName='RingProducts-active-ring'
                // hrefBuilder={hrefBuilder}
                forcePage={selectedPage}
            />
            <CheckOutCart />
        </section>

    )
}

export default RingProducts
