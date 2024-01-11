import React from 'react';
import Header from '../../Header/Header/Header';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Footer from '../../../components/Shared/Footer/Footer';


const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Products />
            <Footer />
        </div>
    );
};

export default Home;