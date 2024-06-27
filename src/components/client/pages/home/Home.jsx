
import React from "react";
import NewProducts from './NewProducts';
import PopularProducts from './PopularProducts';
import Footer from './Footer';
import HomeCarousel from "./HomeCarousel";
// import RingProducts from "./RingProducts";
import Header from "./Header";
import ScrollToTopButton from "../../../helpers/ScrollToTopButton";
// import CustomerSupport from "./CustomerSupport";
// import CheckOutCart from "../checkout/CheckOutCart";
// import CartContextProvider from "../../../helpers/CartContext";




const Home = () => {
    return (
        <>
            <Header />
            <HomeCarousel />
            <NewProducts />
            <PopularProducts />
            <Footer />
            <ScrollToTopButton />
        </>
    );
}
export default Home;

