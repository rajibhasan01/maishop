import React from 'react';
import Header from '../../Header/Header/Header';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Footer from '../../../components/Shared/Footer/Footer';
import ExploreStyles from '../ExploreStyles/ExploreStyles';
import Shoes from '../Shoes/Shoes';
import AllProductsHeading from '../../../components/Shared/ProductsHeading/AllProductsHeading';
import Blogs from '../Blogs/Blogs';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <ExploreStyles />
            <AllProductsHeading title={"Tending Products"} />
            <Shoes />
            <Shoes />
            <Shoes />
            <Blogs />
            <Products />
            <Footer />
        </div>
    );
};

export default Home;