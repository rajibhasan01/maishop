import React from 'react';
import MaiShopOffer from './MaiShopOffer';
import Offer from './Offer';
import Search from './Search';

const SearchHeader = () => {
    return (
        <div className='container-fluid px-md-5'>

            <div className="row mt-2">

                <div className="col-md-3">
                    <MaiShopOffer />
                </div>

                <div className="col-md-6">
                    <Search />
                </div>

                <div className="col-md-3">
                    <Offer />
                </div>

            </div>
        </div>
    );
};

export default SearchHeader;