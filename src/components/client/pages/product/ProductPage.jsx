import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { ToastContainer } from 'react-toastify';
import Header from '../../partials/Header';
import Footer from '../../partials/Footer';
import '../../styles/ProductPage.css';

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); 
    const itemsPerPage = 8;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [priceFilter, setPriceFilter] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [selectedPage, setSelectedPage] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

    const getSlugFromUrl = () => {
        const currentUrl = window.location.pathname;
        return currentUrl.split('/products/')[1];
    };

    const applyFilters = useCallback((products) => {
        let filteredProducts = products.filter(product => product.status === 'active' && product.deleted === false);

        if (priceFilter) {
            if (priceFilter === 'Dưới 50 triệu đồng') {
                filteredProducts = filteredProducts.filter(product => product.price < 50000000);
            } else if (priceFilter === 'Từ 50 - 100 triệu đồng') {
                filteredProducts = filteredProducts.filter(product => product.price >= 50000000 && product.price <= 100000000);
            } else if (priceFilter === 'Từ 100 - 200 triệu đồng') {
                filteredProducts = filteredProducts.filter(product => product.price >= 100000000 && product.price <= 200000000);
            } else if (priceFilter === 'Trên 200 triệu đồng') {
                filteredProducts = filteredProducts.filter(product => product.price > 200000000);
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

    const fetchData = useCallback(() => {
        const slug = getSlugFromUrl();
        setLoading(true); 
        axios.get(`/products/${slug}`)
            .then(response => {
                setProducts(response.data.records || []);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        fetchData();
    }, [location.pathname]);

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

    useEffect(() => {
        const filteredProducts = applyFilters(products);
        setCurrentItems(filteredProducts.slice(selectedPage * itemsPerPage, (selectedPage + 1) * itemsPerPage));
        setPageCount(Math.ceil(filteredProducts.length / itemsPerPage));
    }, [selectedPage, products, applyFilters]);

    const handlePageClick = (event) => {
        setSelectedPage(event.selected);
    };

    const handleFirstPageClick = () => {
        setSelectedPage(0);
    };

    const handleLastPageClick = () => {
        setSelectedPage(pageCount - 1);
    };

    return (
        <>
            <Header />
            <section className='RingProducts-container'>
                <div className="header__img">
                    <img alt='header-image' src='https://file.hstatic.net/1000381168/collection/1920x820px_c920d1d4bbd04d84b13ad580976272cd.png' />
                </div>
                <div className='container'>
                    <div className='select__filter'>
                        <select
                            className='RingProducts-select-ring'
                            onChange={(e) => {
                                setPriceFilter(e.target.value);
                                setSelectedPage(0);
                            }}
                            style={{ marginLeft: '20px' }}
                        >
                            <option>Mức Giá</option>
                            <option>Dưới 50 triệu đồng</option>
                            <option>Từ 50 - 100 triệu đồng</option>
                            <option>Từ 100 - 200 triệu đồng</option>
                            <option>Trên 200 triệu đồng</option>
                        </select>

                        <select
                            className='RingProducts-select-ring'
                            onChange={(e) => {
                                setSortOrder(e.target.value);
                            }}
                            style={{ marginLeft: '20px' }}
                        >
                            <option>Sắp Xếp</option>
                            <option>Giá Từ Cao Đến Thấp</option>
                            <option>Giá Từ Thấp Đến Cao</option>
                        </select>
                    </div>
                </div>

                <div className='product__grid'>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <div className='row'>
                            {Array.isArray(currentItems) && currentItems.map((ring) => (
                                <div className='col-md-3' key={ring._id}>
                                    <div className='RingProducts-item'>
                                        <Link to={`${currentPath}/${ring._id}`}>
                                            <img className='image-product' src={ring.thumbnail} alt={ring.title} />
                                        </Link>
                                        <div className='RingProducts-info'>
                                            <Link style={{ color: 'black' }} to={`/products/${ring._id}`}>
                                                <h3>{ring.title}</h3>
                                            </Link>
                                            <div className="ring__price">
                                                <p>{ring.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    <ToastContainer />
                </div>

                <div className='RingProducts-button-first-last-container'>
                    <div>
                        <button className='RingProducts-button-first' onClick={handleFirstPageClick}>Đầu</button>
                    </div>
                    <ReactPaginate
                        breakLabel=""
                        marginPagesDisplayed={0}
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
                        forcePage={selectedPage}
                    />
                    <div>
                        <button className='RingProducts-button-last' onClick={handleLastPageClick}>Cuối</button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ProductPage;
