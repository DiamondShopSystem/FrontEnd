
import React from "react";
import NewProduct from './NewProducts';
import PopularProduct from './PopularProducts';
import Footer from './Footer';
import HomeCarousel from "./HomeCarousel";
import RingProducts from "./RingProducts";
import CustomerSupport from "./CustomerSupport";
import CheckOutCart from "../checkout/CheckOutCart";
import CartContextProvider from "../../../helpers/CartContext";
import Header from "./Header"




const Home = () => {
    return (
        <>
            <Header />
            <HomeCarousel />
            <NewProduct />
            <PopularProduct />
            <Footer />

        </>
    );
}
export default Home;

