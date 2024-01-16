import React from 'react';
import Header from '../../Header/Header/Header';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Footer from '../../../components/Shared/Footer/Footer';
import ExploreStyles from '../ExploreStyles/ExploreStyles';


const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <ExploreStyles />
            <Products />
            <Footer />
        </div>
    );
};

export default Home;