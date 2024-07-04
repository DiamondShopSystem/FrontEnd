import React from "react";
import Header from "../../partials/Header";
import Footer from '../../partials/Footer';
import NewProducts from './partials/NewProducts';
import PopularProducts from './partials/PopularProducts';
import Carousel from "./partials/Carousel";
import ScrollToTopButton from "../../../helpers/ScrollToTopButton";

const Home = () => {
    return (
        <>
            <Header />
            <Carousel />
            <NewProducts />
            <PopularProducts />
            <Footer />
            <ScrollToTopButton />
        </>
    );
}
export default Home;