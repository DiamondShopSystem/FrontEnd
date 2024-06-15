
import Footer from "./Footer";
import Header from "./Header";
import HomeCarousel from "./HomeCarousel";
import NewProducts from "./NewProducts";
import PopularProducts from "./PopularProducts";
import React from "react";

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

