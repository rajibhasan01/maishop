import React from 'react';
import "./AllProductsHeading.css"

const AllProductsHeading = ({title, subtitle}) => {
    return (
        <div className="container text-center">
            <h1 className="titleText">{title}</h1>
            {subtitle && <p className="robotoFonts">{subtitle}</p>}
        </div>
    );
};

export default AllProductsHeading;
