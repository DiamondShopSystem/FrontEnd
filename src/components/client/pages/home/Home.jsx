import React from "react";
import Carousel from "./partials/Carousel";
import NewProducts from './partials/NewProducts';
import PopularProducts from './partials/PopularProducts';
import ScrollToTopButton from "../ScrollToTopButton";
import '../../styles/Home.css';
const Home = () => {
    
    return (
        <>
            <Carousel />
            <NewProducts />
            <PopularProducts />
            <ScrollToTopButton />
        </>
    );
}
export default Home;