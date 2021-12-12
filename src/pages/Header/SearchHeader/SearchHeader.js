import React from 'react';
import MaiShopOffer from './MaiShopOffer';
import Offer from './Offer';
import Search from './Search';

const SearchHeader = () => {
    return (
        <div className='px-md-5'>
            <div className='container-fluid'>

                <div className="row mt-2 gx-2">

                    <div className="col-md-3">
                        <MaiShopOffer />
                    </div>

                    <div className="col-md-6 px-md-2">
                        <Search />
                    </div>

                    <div className="col-md-3">
                        <Offer />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SearchHeader;