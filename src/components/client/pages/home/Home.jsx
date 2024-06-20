
import React from "react";
import NewProducts from '../home/NewProducts'
import PopularProducts from '../home/PopularProducts';
import Footer from './Footer';
import HomeCarousel from "./HomeCarousel";
import RingProducts from "./RingProducts";
import CustomerSupport from "./CustomerSupport";
import CheckOutCart from "../checkout/CheckOutCart";
import CartContextProvider from "../../../helpers/CartContext";
import Header from './Header'



const Home = () => {
    return (
        <>
            <Header />
            <HomeCarousel />
            <NewProducts />
            <PopularProducts />
            <Footer />

        </>
    );
}
export default Home;

