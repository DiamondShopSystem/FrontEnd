
import React from "react";
import NewProduct from './NewProducts';
// import PopularProduct from './PopularProducts';
// import Footer from './Footer';
// import HomeCarousel from "./HomeCarousel";
import RingProducts from "./RingProducts";
// import CustomerSupport from "./CustomerSupport";
import CheckOutCart from "../checkout/CheckOutCart";
// import CartContextProvider from "../../../helpers/CartContext";



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

