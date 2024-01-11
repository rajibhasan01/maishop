import React, { useEffect } from 'react';
import Footer from '../../components/Shared/Footer/Footer';
import Products from '../Home/Products/Products';
import Header from '../Header/Header/Header';
import './AllProducts.css';

const AllProducts = () => {

    useEffect(() => {
        document.title = "Products"
    }, []);

    return (
        <div className="marginTop" id="allProduct">
            <Header />
            <Products value={true} />
            <Footer />
        </div>
    );
};

export default AllProducts;